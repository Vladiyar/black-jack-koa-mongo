exports.loginApi = (token) => new Promise(async (resolve, reject) => {
        try {
            resolve({
                success:true,
                token: token
            });
        }
        catch(err) {
            reject(err);
        }



});
