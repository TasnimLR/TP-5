/**
 * Auteur : Tasnim LAIOUAR
 * Hook Flag 5 - Broadcast Receiver
 * Cible: FlagFiveReceiver.onReceive()
 * Mecanisme: Envoyer 3 broadcasts consecutifs pour obtenir le flag
 * Flag chiffre DES: Zkdlt0WwtLQ= -> {F1v3!}
 */
Java.perform(function() {
    console.log("[*] Hook Flag 5 - BroadcastReceiver...");

    // Hook le dechiffrement DES
    var k = Java.use('b3nac.injuredandroid.k');
    k.a.implementation = function(str) {
        console.log("[*] k.a() appele avec: " + str);
        var result = this.a(str);
        console.log("[+] Dechiffre: " + result);
        return result;
    };

    // Hook FlagFiveReceiver.onReceive
    var FlagFiveReceiver = Java.use('b3nac.injuredandroid.FlagFiveReceiver');
    FlagFiveReceiver.onReceive.implementation = function(context, intent) {
        console.log("[*] onReceive() appele - Action: " + intent.getAction());

        // Forcer le compteur a 2 pour declencher le flag
        var counterField = FlagFiveReceiver.class.getDeclaredField('a');
        counterField.setAccessible(true);
        counterField.setInt(null, 2);
        console.log("[+] Compteur force a 2 -> le flag va s'afficher");

        this.onReceive(context, intent);
    };

    // Envoyer automatiquement le broadcast
    Java.scheduleOnMainThread(function() {
        var currentApp = Java.use('android.app.ActivityThread').currentApplication();
        var context = currentApp.getApplicationContext();
        var Intent = Java.use('android.content.Intent');
        var intent = Intent.$new("com.b3nac.injuredandroid.intent.action.CUSTOM_INTENT");
        context.sendBroadcast(intent);
        console.log("[*] Broadcast envoye");
    });

    console.log("[+] Hook Flag 5 active");
    console.log("[+] Flag 5 (dechiffre DES): {F1v3!}");
});
