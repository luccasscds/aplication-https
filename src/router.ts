// routers
import { Request, Response, Router } from "express";

const router = Router();

// routers
router.all("*", () => console.log("function global."));

router.get("/", function(req: Request, res: Response){
    res.json({ response: 200 });
});

module.exports = router;