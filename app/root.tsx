import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import type {
  LinksFunction,
  LoaderFunctionArgs,
  TypedResponse,
} from "@remix-run/node";
import stylesheet from "../styles/index.css?url";
import { themeSessionResolver } from "./sessions/theme.server";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { cn } from "~/utils";
import { Header, Footer } from "~/components";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

/** Return the theme from the session storage using the loader */
export async function loader({ request }: LoaderFunctionArgs): Promise<
  TypedResponse<{
    theme: Theme | null;
    gaTrackingId: string;
  }>
> {
  const { getTheme } = await themeSessionResolver(request);

  return json({
    theme: getTheme(),
    gaTrackingId: process.env.GA_TRACKING_ID ?? "",
  });
}

/**
 * Wrap the app with a ThemeProvider
 *  - `specifiedTheme` is the stored theme in the session storage.
 *  - `themeAction` is the action name that's used to change the theme in the session storage.
 */

export function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={cn(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body>
        {process.env.NODE_ENV === "development" || !data.gaTrackingId ? null : (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${data.gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${data.gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}

        <div className="relative flex min-h-screen flex-col overflow-hidden transition-colors duration-150">
          <Header />
          <Outlet />
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"
      disableTransitionOnThemeChange={true}
    >
      <App />
    </ThemeProvider>
  );
}
