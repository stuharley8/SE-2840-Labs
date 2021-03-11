// SE2840 - Lab 4 Coin Flip Charter
// Coin Flipper Results Data

// Tell the code inspection tool that we're writing ES6 compliant code:
// jshint esversion: 6
// Tell the code inspection tool that we're using "developer" classes (console, alert, etc)
// jshint devel:true
// See https://jshint.com/docs/ for more JSHint directives
// jshint unused:false

const results = [
    { id: "D3A46CEC33EC2B0A98007F689406770F", coins: 4, flips: 800000, browser: "Chrome", time: 51 },
    { id: "2571BE2822AC18DA10A134DEC76D2551", coins: 4, flips: 300000, browser: "Edge", time: 228 },
    { id: "81EB0D9592FD1ADDF2DCDA58A0073782", coins: 6, flips: 900000, browser: "Edge", time: 1012 },
    { id: "36D80EECF6D296D4CF96AA6A594A78BA", coins: 4, flips: 500000, browser: "Firefox", time: 18 },
    { id: "A173FDF1FFFF2B851E5DFAEE7DF729D2", coins: 8, flips: 700000, browser: "Firefox", time: 48 },
    { id: "69C02C4975F4A18E6F0975F2E933E7F4", coins: 2, flips: 700000, browser: "Edge", time: 305 },
    { id: "2BB30F79CA06DCDADF5FD0027CC7FE32", coins: 4, flips: 700000, browser: "Chrome", time: 45 },
    { id: "C4E5FCC2D2161DB87CBF9C02615D297D", coins: 2, flips: 600000, browser: "Firefox", time: 25 },
    { id: "BD8D3A7077DD7288C8AF30F026B04AF4", coins: 6, flips: 300000, browser: "Chrome", time: 27 },
    { id: "811A764F5A631C7FDAFB8815650C2C85", coins: 2, flips: 200000, browser: "Firefox", time: 8 },
    { id: "7538C7E650807CC28D782D47EB56C3CE", coins: 8, flips: 700000, browser: "Edge", time: 1036 },
    { id: "B3D96FCF5E3D0BF4C24CBD9C1F5DC666", coins: 10, flips: 800000, browser: "Edge", time: 1341 },
    { id: "A36916D1C6D9527624AA1A5A0A4095DA", coins: 10, flips: 200000, browser: "Edge", time: 396 },
    { id: "4784AC83314FFA4A0617129D1850BCB3", coins: 6, flips: 800000, browser: "Firefox", time: 35 },
    { id: "6335EECAFDE8403DD51BF212B621A81E", coins: 6, flips: 400000, browser: "Chrome", time: 37 },
    { id: "381ACB0209235223F51BB42C1DBFB2EE", coins: 2, flips: 400000, browser: "Firefox", time: 14 },
    { id: "0104BD98D6D40410561CCB5CCE36DD49", coins: 2, flips: 300000, browser: "Chrome", time: 34 },
    { id: "A8FAED516A438EDB4F688D26ED71BC22", coins: 8, flips: 500000, browser: "Edge", time: 744 },
    { id: "B620D5FDAA68062CC30CAE01C1922B98", coins: 6, flips: 600000, browser: "Chrome", time: 54 },
    { id: "2EF1F6372EDA798D000ACE5B5E2D66FF", coins: 8, flips: 100000, browser: "Edge", time: 133 },
    { id: "7DA49DAD442C24D58C2E5ACFCD93E2CB", coins: 8, flips: 200000, browser: "Chrome", time: 23 },
    { id: "173504C5644D63C3B749334B5B147BCE", coins: 8, flips: 200000, browser: "Edge", time: 268 },
    { id: "4B9D61CF23C8D8015BA573A3407FEFF5", coins: 10, flips: 700000, browser: "Chrome", time: 115 },
    { id: "EBB16636C1735A91D4FBA27E4B62ED3B", coins: 2, flips: 300000, browser: "Firefox", time: 11 },
    { id: "3E290063AB934A1CDF62A044819A6110", coins: 2, flips: 800000, browser: "Chrome", time: 30 },
    { id: "D966D709E441EC91C76B018D7EAACE77", coins: 6, flips: 900000, browser: "Chrome", time: 91 },
    { id: "DB975602828C40624B596243DFE51F49", coins: 10, flips: 300000, browser: "Chrome", time: 45 },
    { id: "BFFFD7B914DA84A3D946C1C09CCBF9CE", coins: 2, flips: 700000, browser: "Firefox", time: 19 },
    { id: "4242F61DFA70524C23F66B2329E46557", coins: 4, flips: 100000, browser: "Chrome", time: 8 },
    { id: "05F710D9C7532E45657C078C07B00988", coins: 8, flips: 800000, browser: "Firefox", time: 45 },
    { id: "21829C5DB2C4D1F7DE354C581E3A1648", coins: 2, flips: 200000, browser: "Edge", time: 190 },
    { id: "5A6AD0B8D3EA4585330B0139865AB3B0", coins: 6, flips: 800000, browser: "Chrome", time: 97 },
    { id: "753B48C96FCC5F0FC48A65131A234E8E", coins: 6, flips: 700000, browser: "Edge", time: 724 },
    { id: "0825B8563BB7D167E20EEB03D7A6890C", coins: 6, flips: 100000, browser: "Chrome", time: 10 },
    { id: "D303A51C279509A333AF46584E3DDA7B", coins: 10, flips: 300000, browser: "Firefox", time: 18 },
    { id: "18ED0E3B317BD648C2D42D88D50C46DA", coins: 10, flips: 500000, browser: "Firefox", time: 29 },
    { id: "2FC35A7CF82AA29CBD056483BF9EC70A", coins: 4, flips: 600000, browser: "Edge", time: 460 },
    { id: "8966F20B684F8E0E216FA455BE823CD7", coins: 2, flips: 100000, browser: "Edge", time: 84 },
    { id: "13D0A9AE7FE8B13054230B14AB775474", coins: 4, flips: 100000, browser: "Firefox", time: 3 },
    { id: "BDD709E249CEC0631C6E6C38A7A65084", coins: 4, flips: 100000, browser: "Edge", time: 74 },
    { id: "83A1A903DC7988270C3D6EBA95BBBD07", coins: 2, flips: 500000, browser: "Chrome", time: 26 },
    { id: "53822E15CD9EEF1D13B9CE06CC09B608", coins: 4, flips: 200000, browser: "Edge", time: 153 },
    { id: "94E9FB59A98FD31E12C660B4AA06A424", coins: 2, flips: 900000, browser: "Chrome", time: 43 },
    { id: "A3E3829D5A62914F4997ABACD11A4BF2", coins: 10, flips: 600000, browser: "Edge", time: 1041 },
    { id: "21D28B18191FE7DD88D5DB96C55F8A47", coins: 6, flips: 500000, browser: "Edge", time: 533 },
    { id: "8761E066DC882EC8E5B0AC36D38867F6", coins: 10, flips: 600000, browser: "Firefox", time: 35 },
    { id: "3958DAC29B20D1515323BEDF46769E9A", coins: 4, flips: 400000, browser: "Edge", time: 308 },
    { id: "67C8A568D42E0DD57982E75C8992E0F5", coins: 6, flips: 400000, browser: "Edge", time: 425 },
    { id: "0ED28B62941474FD3DD168E6F7F7374E", coins: 8, flips: 900000, browser: "Chrome", time: 104 },
    { id: "6CF05BB8C5BFB01CF8BDCFFE5F3BEF93", coins: 4, flips: 600000, browser: "Chrome", time: 52 },
    { id: "E37BAF7D3CB51885FE89986C2E263359", coins: 2, flips: 300000, browser: "Edge", time: 200 },
    { id: "047C3FCC06E4EB5111367E9CC17ED0D5", coins: 6, flips: 600000, browser: "Firefox", time: 25 },
    { id: "37D9D702FC1AE6DD2EC2AE59E1B997F0", coins: 6, flips: 200000, browser: "Edge", time: 208 },
    { id: "43F1FA91BB14934E760665025687C7DC", coins: 2, flips: 400000, browser: "Chrome", time: 37 },
    { id: "A6103B5F67129D3FA7E687B48BC89CFD", coins: 8, flips: 900000, browser: "Firefox", time: 50 },
    { id: "265EBB6E46164BC1147DCDA417ACC551", coins: 6, flips: 500000, browser: "Firefox", time: 19 },
    { id: "F56F37F6E1EA60A66A25E63941307393", coins: 4, flips: 500000, browser: "Edge", time: 377 },
    { id: "2B3E317B5DD3E57DF55A0D767789D5C0", coins: 2, flips: 500000, browser: "Edge", time: 214 },
    { id: "4A1A24876CE6267633281BD855E1F48F", coins: 6, flips: 200000, browser: "Chrome", time: 18 },
    { id: "A084FF59DD649418D5D3F44ABAE4B496", coins: 6, flips: 800000, browser: "Edge", time: 855 },
    { id: "23B6B0EA67143A78C63D437A90EDBFAE", coins: 8, flips: 500000, browser: "Firefox", time: 31 },
    { id: "1DD9C7AE3C81A99AEB97F41B60C1A8ED", coins: 8, flips: 500000, browser: "Chrome", time: 57 },
    { id: "3FB39855B00E2ECA0A8C69B6C343D081", coins: 4, flips: 400000, browser: "Chrome", time: 28 },
    { id: "03D43525100961E3A3D1A5B27D09DFFD", coins: 6, flips: 200000, browser: "Firefox", time: 7 },
    { id: "2A15A0C7CC009EC304BADF5D8A7E7626", coins: 10, flips: 900000, browser: "Chrome", time: 129 },
    { id: "0EB502FB1ABDA703F6FAAC45FAB82A2C", coins: 8, flips: 800000, browser: "Chrome", time: 92 },
    { id: "4A147299D2756449AE7BD9B918BBFC7D", coins: 6, flips: 600000, browser: "Edge", time: 673 },
    { id: "A442E350A39A24F3DE56E5073CE7D61D", coins: 8, flips: 700000, browser: "Chrome", time: 83 },
    { id: "B5835CCEDFA29FC55E6C4E0AE94F6B41", coins: 10, flips: 700000, browser: "Firefox", time: 42 },
    { id: "79666B691AACB5FC14E4CCCE2CEDF59E", coins: 2, flips: 600000, browser: "Chrome", time: 26 },
    { id: "6931F70CD40F884ADC58DB776ED93B1C", coins: 2, flips: 800000, browser: "Edge", time: 377 },
    { id: "FEB663AFFF3A5CBED8766FDE39308B30", coins: 10, flips: 800000, browser: "Firefox", time: 45 },
    { id: "A62110A238E9AB3DB36641CC496FF359", coins: 8, flips: 100000, browser: "Chrome", time: 12 },
    { id: "E0C5E5625E86C6045DE2B708809FBD83", coins: 4, flips: 200000, browser: "Chrome", time: 15 },
    { id: "0140104A8BC3630ED38DE0AC9360AEC2", coins: 4, flips: 600000, browser: "Firefox", time: 19 },
    { id: "3380EF093E752225AD0837E004ABBE5E", coins: 10, flips: 900000, browser: "Firefox", time: 50 },
    { id: "F0B10A80552C9729AE9805FD4F1DF8F6", coins: 8, flips: 400000, browser: "Chrome", time: 48 },
    { id: "D03E2FCD560CDCA7411C5CB4EE088266", coins: 10, flips: 700000, browser: "Edge", time: 1199 },
    { id: "57B4F1F68CC0FC83701777D02A7775D1", coins: 2, flips: 100000, browser: "Chrome", time: 26 },
    { id: "1959CE63B8BE302E269BCC79E414DAC0", coins: 4, flips: 200000, browser: "Firefox", time: 7 },
    { id: "3A69C265E15ED60129257E89D54BE8EB", coins: 2, flips: 100000, browser: "Firefox", time: 6 },
    { id: "EF0C1E2C5425E1A53E1B9AC31A1149A4", coins: 8, flips: 300000, browser: "Firefox", time: 14 },
    { id: "E4AE7BBDB60F840E75A3B3C2D71A75F9", coins: 10, flips: 300000, browser: "Edge", time: 497 },
    { id: "6E9F32E0F0E5D1669AC2DE4AB2D5BA96", coins: 4, flips: 800000, browser: "Firefox", time: 26 },
    { id: "09148C3795AD89DB3001B10AD07EEB1A", coins: 2, flips: 900000, browser: "Firefox", time: 20 },
    { id: "641C64BB78B0C4C661CD601A05ED9D3C", coins: 4, flips: 700000, browser: "Firefox", time: 21 },
    { id: "BF94F47A30F441B64E89CE123EB655F3", coins: 6, flips: 100000, browser: "Firefox", time: 4 },
    { id: "4E4091049AE9DF5528B27EA2FE3DFEC5", coins: 6, flips: 300000, browser: "Firefox", time: 12 },
    { id: "214184D6F7CC8C4EA2B6B5A0815EB063", coins: 8, flips: 100000, browser: "Firefox", time: 5 },
    { id: "9B7200D05576800E2B909ADF5F536C71", coins: 6, flips: 100000, browser: "Edge", time: 115 },
    { id: "1051D68E404CF21764073503487C0E25", coins: 10, flips: 200000, browser: "Chrome", time: 27 },
    { id: "62EA1A2268F3029B4F95CB2045E63DF5", coins: 10, flips: 500000, browser: "Edge", time: 813 },
    { id: "2C64F606C41E0E720A41BD6E3FE699C9", coins: 2, flips: 400000, browser: "Edge", time: 183 },
    { id: "3295303EC514525E07CAC489EE7F13B3", coins: 6, flips: 300000, browser: "Edge", time: 316 },
    { id: "6C89DC1C935CA3821C809742F8ED1F0E", coins: 4, flips: 900000, browser: "Firefox", time: 29 },
    { id: "DD3E1A0246F047D8C101B979D1C7AADF", coins: 10, flips: 400000, browser: "Firefox", time: 22 },
    { id: "2286F05F91D1891E9BEF94BE2AEF22CC", coins: 8, flips: 600000, browser: "Chrome", time: 69 },
    { id: "BB0F20A92FC9CD5BC5A7966E39E28EB9", coins: 10, flips: 800000, browser: "Chrome", time: 133 },
    { id: "13F821B818DC1F21492AA300781F5106", coins: 8, flips: 300000, browser: "Edge", time: 398 },
    { id: "B3906AE7DCD1D84C8F60B9983123ACCB", coins: 4, flips: 900000, browser: "Edge", time: 683 },
    { id: "92EC3F50B8EEAF59BA587F6D53E32311", coins: 8, flips: 600000, browser: "Firefox", time: 42 },
    { id: "9EA5D2E592F26DB7E8046B73831512CE", coins: 10, flips: 600000, browser: "Chrome", time: 93 },
    { id: "4034C7D430F571F47C0D3A286F9793C4", coins: 10, flips: 100000, browser: "Edge", time: 182 },
    { id: "6C88CB01E49072D41FD327CB63602300", coins: 10, flips: 100000, browser: "Chrome", time: 15 },
    { id: "6E24618878F6CABE9204A5AC7A24EC91", coins: 2, flips: 900000, browser: "Edge", time: 386 },
    { id: "A0A872B54C6686906F6FF0B0A08E0395", coins: 2, flips: 200000, browser: "Chrome", time: 31 },
    { id: "A8050980D95FCEE2DE9A3DADCB6C3F1D", coins: 4, flips: 900000, browser: "Chrome", time: 55 },
    { id: "58B3227E17D7A22DB5063AE1BE76CB7C", coins: 6, flips: 500000, browser: "Chrome", time: 46 },
    { id: "2B88B0F2A122E338B67A8361A53BF92B", coins: 6, flips: 700000, browser: "Firefox", time: 27 },
    { id: "5D34D36DD4FD4E23750EFB0908DB0A70", coins: 4, flips: 400000, browser: "Firefox", time: 12 },
    { id: "410FB5687A2DA25559E28FF8E6E145A0", coins: 6, flips: 400000, browser: "Firefox", time: 16 },
    { id: "B5A9958C504C1B82A50BAD5BB53412CB", coins: 8, flips: 900000, browser: "Edge", time: 1253 },
    { id: "4DE0537BE1A8B4DB06D4E9C7C3866C0F", coins: 4, flips: 300000, browser: "Firefox", time: 10 },
    { id: "546F604E1D76DF9BB2514A86692CD98B", coins: 4, flips: 500000, browser: "Chrome", time: 43 },
    { id: "546D2A211A37923570197E4D940D5A10", coins: 10, flips: 400000, browser: "Chrome", time: 59 },
    { id: "196803AAB346C315494866AF5FD5DDFA", coins: 4, flips: 800000, browser: "Edge", time: 594 },
    { id: "D588D0B90B787BB35D94CAA66E6A8038", coins: 8, flips: 800000, browser: "Edge", time: 1194 },
    { id: "9B650E81464CE44F2D170A90129E1305", coins: 10, flips: 100000, browser: "Firefox", time: 9 },
    { id: "910F4401B37D5385DD82ACF16E25E1B4", coins: 10, flips: 500000, browser: "Chrome", time: 75 },
    { id: "D824B68BF0CFC040BD2520FE2A6A2E6C", coins: 10, flips: 200000, browser: "Firefox", time: 16 },
    { id: "D455D20662BF4C95C877373C272E332F", coins: 6, flips: 700000, browser: "Chrome", time: 66 },
    { id: "1834A5B2B30AAFF012142B394B2CE407", coins: 6, flips: 900000, browser: "Firefox", time: 44 },
    { id: "71F5B7CB6095ABFBA4E83DA7AD61B173", coins: 8, flips: 400000, browser: "Firefox", time: 21 },
    { id: "DCF4B607FED539C2AEBFA81D4FCB0CBF", coins: 10, flips: 400000, browser: "Edge", time: 692 },
    { id: "35687D96DCAE8DF4D7CBC3B6E79EA2B4", coins: 8, flips: 400000, browser: "Edge", time: 563 },
    { id: "E5DABB59BC025B9B0ED04AAB8E9E64FB", coins: 2, flips: 500000, browser: "Firefox", time: 17 },
    { id: "701CC120A6D94DD562836B2DA29602DF", coins: 10, flips: 900000, browser: "Edge", time: 1492 },
    { id: "6F4EEF53F5B8A2956846FCFB7BAFFEA7", coins: 2, flips: 600000, browser: "Edge", time: 266 },
    { id: "4E3755AB8C234F828AC0FF910E092593", coins: 4, flips: 300000, browser: "Chrome", time: 21 },
    { id: "B75ED2772D51667637C6E7B9389CC4E8", coins: 2, flips: 800000, browser: "Firefox", time: 18 },
    { id: "1DE3531F17925F5CB5CB7B6D0430C6FC", coins: 8, flips: 600000, browser: "Edge", time: 832 },
    { id: "758EB4DB93F68B8C1FA616926642F440", coins: 8, flips: 200000, browser: "Firefox", time: 10 },
    { id: "CF49461A63A6E120C3055F8D21DA59C5", coins: 2, flips: 700000, browser: "Chrome", time: 33 },
    { id: "6DF1EDF8E642C54522006492A1E7C528", coins: 4, flips: 700000, browser: "Edge", time: 525 },
    { id: "79904D4E86F264416E0114FEC96DA88F", coins: 8, flips: 300000, browser: "Chrome", time: 35 },
];