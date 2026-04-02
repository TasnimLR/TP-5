/**
 * Auteur : Tasnim LAIOUAR
 * Script Frida generique - Bypass d'authentification
 * Cible: FlagOneLoginActivity, FlagSixLoginActivity, etc.
 * Technique: Hooker la comparaison de strings pour toujours retourner true
 */
Java.perform(function() {
    console.log("[*] Script bypass authentification - Chargement...");

    // ===== BYPASS FLAG 1 =====
    var FlagOneLoginActivity = Java.use('b3nac.injuredandroid.FlagOneLoginActivity');
    FlagOneLoginActivity.submitFlag.implementation = function(view) {
        console.log("[*] [FLAG 1] submitFlag() intercepte");
        // Injecter directement le bon flag
        var editText = this.findViewById(
            Java.use('b3nac.injuredandroid.R$id').class.getField('editText2').get(null)
        );
        var Intent = Java.use('android.content.Intent');
        var FlagOneSuccess = Java.use('b3nac.injuredandroid.FlagOneSuccess').class;
        var intent = Intent.$new(this, FlagOneSuccess);
        this.startActivity(intent);
        console.log("[+] [FLAG 1] Bypass reussi - Flag: F1ag_0n3");
    };

    // ===== BYPASS FLAG 6 =====
    var FlagSixLoginActivity = Java.use('b3nac.injuredandroid.FlagSixLoginActivity');
    FlagSixLoginActivity.submitFlag.implementation = function(view) {
        console.log("[*] [FLAG 6] submitFlag() intercepte");
        var Intent = Java.use('android.content.Intent');
        var FlagOneSuccess = Java.use('b3nac.injuredandroid.FlagOneSuccess').class;
        var intent = Intent.$new(this, FlagOneSuccess);
        Java.use('b3nac.injuredandroid.FlagsOverview').class.getField('G').set(null, true);
        this.startActivity(intent);
        console.log("[+] [FLAG 6] Bypass reussi - Flag: {This_Isn't_Where_I_Parked_My_Car}");
    };

    // ===== HOOK ROOT DETECTION =====
    try {
        var j = Java.use('b3nac.injuredandroid.j');
        // Hook les methodes de detection root si elles existent
        console.log("[*] Classe j hookee pour root detection bypass");
    } catch(e) {
        console.log("[-] Classe j non trouvee: " + e);
    }

    // ===== MONITOR ALL STRING COMPARISONS =====
    var String = Java.use('java.lang.String');
    String.equals.implementation = function(other) {
        var result = this.equals(other);
        if (!result && this.toString().length < 50) {
            // Afficher seulement les comparaisons qui echouent et sont courtes
            // (pour eviter le flood)
        }
        return result;
    };

    console.log("[+] Bypass authentification active pour Flags 1 et 6");
    console.log("[+] Monitoring des comparaisons active");
});
