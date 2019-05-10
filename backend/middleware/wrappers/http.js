/**
 * Call controller with adapted parameters for HTTP request.
 * @public
 * @param {Function} controller The controller to call with the adapted parameters.
 * @returns {Function} A middleware wrapping the Koa context to a controller.
 */
function http(controller) {
    return async ctx => {
        const {
            params,
            request: { body }
        } = ctx;
        ctx.status = ctx.method === 'POST' ? 201 : 200;
        ctx.body = await controller(body, params, ctx);
    };
}

module.exports = http;
