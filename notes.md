# Good To Know
- The .js, .jsx, or .tsx file extensions can be used for Pages.
- Data returned through page.[js/jsx/ts/tsx] are only publicly accessible
- A page is always the leaf of the route subtree

-   ### Layout wraps the page file content
    ```
    export default function HomeLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <section className="flex flex-col w-full bg-gray-100 h-screen">
        <h1 className="border text-center text-6xl p-2">Home Page</h1>
        {children}
        </section>
    );
    }
    ```

- Only the root layout can contain <html> and <body> tags.
- When a layout.js and page.js file are defined in the same folder, the layout will wrap the page.
- 
    ```
    You should not manually add <head> tags such as <title> and <meta> to root layouts. Instead, use the Metadata API which automatically handles advanced requirements such as streaming and de-duplicating <head> elements.
    ```
