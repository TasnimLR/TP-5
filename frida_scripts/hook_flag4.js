/**
 * Auteur : Tasnim LAIOUAR
 * Hook Flag 4 - Bypass Base64 encoded credential
 * Cible: FlagFourActivity.submitFlag()
 * Mecanisme: classe g() decode Base64 "NF9vdmVyZG9uZV9vbWVsZXRz" -> "4_overdone_omelets"
 */
Java.perform(function() {
    console.log("[*] Hook Flag 4 - Chargement...");

    // Hook classe g pour observer le decodage
    var g = Java.use('b3nac.injuredandroid.g');
    g.a.implementation = function() {
        var result = this.a();
        var str = Java.use('java.lang.String').$new(result);
        console.log("[*] Classe g.a() retourne: " + str);
        return result;
    };

    // Hook FlagFourActivity.submitFlag
    var FlagFourActivity = Java.use('b3nac.injuredandroid.FlagFourActivity');
    FlagFourActivity.submitFlag.implementation = function(view) {
        console.log("[*] submitFlag() appele");
        // Le flag decode est: 4_overdone_omelets
        console.log("[+] Flag attendu: 4_overdone_omelets");
        console.log("[+] Encode en Base64: NF9vdmVyZG9uZV9vbWVsZXRz");
        this.submitFlag(view);
    };

    console.log("[+] Hook Flag 4 active");
    console.log("[+] Flag 4: 4_overdone_omelets");
});
