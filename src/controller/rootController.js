export async function root(req, res) {

    res.sendFile(`${process.cwd()}/src/views/index.html`);

}
