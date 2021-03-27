import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

const getStackFile = (fileName: string) =>
    fs.readFileSync(path.resolve('content/stacks', `${fileName}.md`), 'utf-8');

const getStack = (stack) => {
    // function that expose helpful callbacks
    // to manipulate the data before convert it into html
    const renderer = new marked.Renderer();

    // parse the md to get front matter
    // and the content without escaping characters
    const { data, content } = matter(stack);

    const html = marked(content, { renderer });

    if (html) {
        return { html, ...data };
    } else {
        return data;
    }
};

const getAllStacks = () =>
    fs.readdirSync('content/stacks').map((fileName) => {
        const stack = fs.readFileSync(
            path.resolve('content/stacks', fileName),
            'utf-8'
        );
        return getStack(stack);
    });

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json',
    });
    const posts = getAllStacks();
    res.end(JSON.stringify(posts));
}
