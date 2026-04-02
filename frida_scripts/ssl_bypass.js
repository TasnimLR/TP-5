// Auteur : Tasnim LAIOUAR
// SSL Pinning Bypass - InjuredAndroid
Java.perform(function() {
    var TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
    TrustManagerImpl.verifyChain.implementation = function() {
        return arguments[0];
    };

    var OkHttpClient = Java.use('okhttp3.OkHttpClient');
    try {
        OkHttpClient.newCall.implementation = function(request) {
            return this.newCall(request);
        };
    } catch(e) {}

    console.log('[+] SSL Pinning desactive');
});
