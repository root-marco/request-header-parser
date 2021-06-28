export async function hello(req, res) {

    res.json({
        greeting: "hello API",
    });

}

export async function whoami(req, res) {

    res.json({
        ip: req.ip,
    });

    console.log(req.ips);

}