export async function hello(req, res) {

    res.json({
        greeting: "hello API",
    });

}

export async function whoami(req, res) {

    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers["user-agent"],
    });

}