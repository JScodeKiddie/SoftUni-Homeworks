// *** Import the navigation template here ***
export const addNavigation = (template) => {
  let hasUser = null;
  return (ctx, next) => {
    if (hasUser !== Boolean(ctx.user)) {
      hasUser = Boolean(ctx.user);
      ctx.renderNav(template(hasUser));
    }
    next();
  };
};
