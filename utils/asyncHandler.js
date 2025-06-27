const asyncHandler = (fn) => async (req, res) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500).json({
      succes: false,
      message: error.message,
    });
  }
  //  -------------------------------------------------------------
  // OR
  // const asyncHandler = (fn) =>{
  //     return (req,res,next) =>{
  //         Promise.resolve(fn(req, res, next))
  //         .catch((error) => next(error));
  //     }
  // }
};
export default asyncHandler;
