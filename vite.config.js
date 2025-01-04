import react from '@vitejs/plugin-react'
import { transformWithEsbuild } from 'vite'
import restart from 'vite-plugin-restart'
import { defineConfig } from 'vite'

export default defineConfig({
    root: 'src',
    publicDir: '../public/',
    plugins:
    [
        react(),
        // Restart server on static/public file change
        restart({ restart: [ '../public/**', ] }),

        // .js file support as if it was JSX
        {
            name: 'load+transform-js-files-as-jsx',
            async transform(code, id)
            {
                if (!id.match(/\.(jsx?|tsx?)$/))
                    return null

                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                });
            },
        },
    ],
    server:
    {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../docs', 
        emptyOutDir: true, 
        sourcemap: true // Add sourcemap
    },
    base: '/',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    esbuild: {
        loader: 'jsx', 
        include: /src\/.*\.jsx?$/,  
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx',  
            },
        },
    },
}
)