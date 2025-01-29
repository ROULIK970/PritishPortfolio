import jwt from "jsonwebtoken";

const ensureAuthenticatedRoute = async(req, res, next) => {
  const auth = req.header("authorization");
  if (!auth) {
    return res.status(403).json({
      message: "Unauthorized! JWT token is required",
    });
  }

  try {
    const decodedToken= await jwt.verify(auth, process.env.JWT_SECRET)
    req.user = decodedToken
    next()
  } catch (error) {
    return res.status(403).json({ message: "Unauthorized. Invalid JWT Token", error:error.message });
  }
};

export default ensureAuthenticatedRoute
