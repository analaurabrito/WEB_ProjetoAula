import express from "express";

import UserRouter from "./routes/UserRoutes";
import CommentRouter from "./routes/CommentRoutes";
import PostRouter from "./routes/PostRoutes";
import AuthRouter from "./routes/AuthRoute";

const app = express();
app.use(express.json());

app.use(UserRouter);
app.use(PostRouter);
app.use(CommentRouter);
app.use(AuthRouter);

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});