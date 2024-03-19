import jwt from "jsonwebtoken";
const { APP_SECRET} = process.env;

export const verifyAuth = async (req, res, next) => {
    try {
        // check header or url parameters or post parameters for token
        const access_token = req.headers['x-access-token'];

        if (!access_token) return res.status(403).json({
            status:'Unauthorized',
            payload: 'No token provided.'
        });

        // verifies secret and checks exp
        const decoded = await jwt.verify(access_token, APP_SECRET as string)
        console.log(decoded)
        // take token from db and compare to decoded

        // if everything is good can move on
        next();

    } catch (error) {
        return res.status(401).json({
            status:'Unauthorized',
            payload: 'Unauthorized - Failed to authenticate token.'
        });
    }
}
