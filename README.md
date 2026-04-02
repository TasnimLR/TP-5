# TP 5 – Analyse d'une application Android vulnérable

**Auteur : Tasnim LAIOUAR**

Cible : InjuredAndroid

## Outils

- jadx — décompilation APK
- Frida — analyse dynamique
- Objection — bypass root/SSL

## Structure

```
├── rapport.md
├── frida_scripts/
│   ├── hook_flag1.js
│   ├── hook_flag4.js
│   ├── hook_flag5_broadcast.js
│   ├── hook_flag6_des.js
│   └── hook_bypass_auth.js
├── captures/
└── objection_captures/
```

## Flags trouvés

| Flag | Valeur |
|------|--------|
| Flag 1 | `F1ag_0n3` |
| Flag 3 | `F1ag_thr33` |
| Flag 4 | `4_overdone_omelets` |
| Flag 5 | `{F1v3!}` |
| Flag 6 | `{This_Isn't_Where_I_Parked_My_Car}` |
