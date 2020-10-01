import {NextApiRequest, NextApiResponse} from "next";

interface EchoNextApiRequest extends  NextApiRequest{
    query: {
        message?: string
    }
}

export default function echo(req:EchoNextApiRequest,res:NextApiResponse) {
    res.json({
        message: req.query.message ?? 'Empty message'
    })
}
