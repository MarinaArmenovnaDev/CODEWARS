//❓ Алекс только что получил новый обруч, он ему очень нравится, но он расстроен, потому что его младший брат лучше его.
// Напишите программу, в которой Алекс может ввести ( n), сколько раз обруч сделает оборот, и программа вернет ему ободряющее сообщение:
// Если Алекс наберет 10 или более обручей, верните веревку "Great, now move on to tricks".
// Если он не набрал 10 обручей, верните веревку "Keep at it until you get it".

//✅ SOLUTION
function hoopCount (n){
    return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}


