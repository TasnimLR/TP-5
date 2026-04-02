/**
 * Auteur : Tasnim LAIOUAR
 * Hook Flag 1 - Bypass hardcoded credential check
 * Cible: FlagOneLoginActivity.submitFlag()
 * Flag: F1ag_0n3
 */
Java.perform(function() {
    console.log("[*] Hook Flag 1 - Chargement...");

    var FlagOneLoginActivity = Java.use('b3nac.injuredandroid.FlagOneLoginActivity');

    // Methode 1: Hook submitFlag pour forcer le bon flag
    FlagOneLoginActivity.submitFlag.implementation = function(view) {
        console.log("[*] submitFlag() appele");

        // Trouver l'EditText et forcer la valeur
        var editText = this.findViewById(0x7f080063); // R.id.editText2
        if (editText) {
            editText.setText("F1ag_0n3");
            console.log("[+] Flag injecte: F1ag_0n3");
        }

        // Appeler l'implementation originale
        this.submitFlag(view);
        console.log("[+] Flag 1 soumis");
    };

    // Methode 2: Hook la comparaison de strings
    var g = Java.use('d.s.d.g');
    var original_a = g.a.overload('java.lang.String', 'java.lang.String');
    original_a.implementation = function(s1, s2) {
        console.log("[*] Comparaison: '" + s1 + "' == '" + s2 + "'");
        var result = original_a.call(this, s1, s2);
        console.log("[*] Resultat: " + result);
        return result;
    };

    console.log("[+] Hook Flag 1 active - Flag attendu: F1ag_0n3");
});
