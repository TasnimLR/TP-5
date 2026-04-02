/**
 * Auteur : Tasnim LAIOUAR
 * Hook Flag 6 - DES Encryption Bypass
 * Cible: FlagSixLoginActivity.submitFlag()
 * Cle DES: Captur3Th1s (depuis classe h.b() -> Base64 "Q2FwdHVyM1RoMXM=")
 * Flag chiffre: k3FElEG9lnoWbOateGhj5pX6QsXRNJKh///8Jxi8KXW7iDpk2xRxhQ==
 * Flag dechiffre: {This_Isn't_Where_I_Parked_My_Car}
 */
Java.perform(function() {
    console.log("[*] Hook Flag 6 - DES Bypass...");

    // Hook classe k.a() pour voir les dechiffrements
    var k = Java.use('b3nac.injuredandroid.k');
    k.a.implementation = function(str) {
        console.log("[*] k.a() chiffre: " + str);
        var result = this.a(str);
        console.log("[+] k.a() dechiffre: " + result);
        return result;
    };

    // Hook classe h pour voir les cles DES
    var h = Java.use('b3nac.injuredandroid.h');
    h.a.implementation = function() {
        var result = this.a();
        var key = Java.use('java.lang.String').$new(result);
        console.log("[*] Cle DES (h.a): " + key);
        return result;
    };
    h.b.implementation = function() {
        var result = this.b();
        var key = Java.use('java.lang.String').$new(result);
        console.log("[*] Cle DES (h.b): " + key);
        return result;
    };

    // Hook FlagSixLoginActivity.submitFlag
    var FlagSixLoginActivity = Java.use('b3nac.injuredandroid.FlagSixLoginActivity');
    FlagSixLoginActivity.submitFlag.implementation = function(view) {
        console.log("[*] submitFlag() appele");
        console.log("[+] Flag 6 attendu: {This_Isn't_Where_I_Parked_My_Car}");
        this.submitFlag(view);
    };

    console.log("[+] Hook Flag 6 active");
    console.log("[+] Cle DES: Captur3Th1s");
    console.log("[+] Flag 6: {This_Isn't_Where_I_Parked_My_Car}");
});
