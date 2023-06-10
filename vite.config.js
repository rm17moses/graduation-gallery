import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from './data.json' assert {type:'json'};

export default defineConfig({
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                about: 'index-about.html',
                undergraduate: 'index-undergraduate.html',
                postgraduate: 'index-postgraduate.html',
                contact: 'index-contact.html',
            }
        },
    },
    base : '/graduation-gallery/',
    plugins: [handlebars({
      context :
        data
  })]
    
});