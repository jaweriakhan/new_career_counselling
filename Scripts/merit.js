function reset() {
    document.getElementById("fj").reset();
}


function pucit() {
    var metric = document.getElementById("pucit_metric").value;
    var inter = document.getElementById("pucit_inter").value;
    var tinter = document.getElementById("pucit_tinter").value;
    var test = document.getElementById("pucit_test").value;
    var tmetric = document.getElementById("pucit_tmetric").value;
    var ttest = document.getElementById("pucit_ttest").value;

    var nhQ = 0;
    if (pucit_hq.checked) { nhQ = 20; }

    //var result=((metric+inter+nhQ)/(tmetric+tinter)*70)+(test/ttest*30);
    var result = ((+metric / 4) + +inter + +nhQ) / ((+tmetric / 4) + +tinter) * 70 + (test / ttest * 30);

    document.getElementById("pucit_result").value = result;
}



function uet() {

    var inter = document.getElementById("uet_inter").value;
    var tinter = document.getElementById("uet_tinter").value;
    var test = document.getElementById("uet_test").value;
    var ttest = document.getElementById("uet_ttest").value;


    var res = (+inter / tinter * 70) + (test / ttest * 30);

    document.getElementById("uet_result").value = res;
}

function uhs() {
    var tmetric = document.getElementById("uhs_tmetric").value;
    var metric = document.getElementById("uhs_metric").value;
    var inter = document.getElementById("uhs_inter").value;
    var test = document.getElementById("uhs_test").value;
    var ttest = document.getElementById("uhs_ttest").value;


    var res = (+inter / 1100 * 40) + (test / ttest * 50) + (metric / tmetric * 10);

    document.getElementById("uhs_result").value = res;
}


function ist() {
    var tmetric = document.getElementById("ist_tmetric").value;
    var metric = document.getElementById("ist_metric").value;
    var inter = document.getElementById("ist_inter").value;
    var tinter = document.getElementById("ist_tinter").value;
    var test = document.getElementById("ist_test").value;
    var ttest = document.getElementById("ist_ttest").value;


    var res = (+inter / tinter * 40) + (test / ttest * 40) + (metric / tmetric * 20);

    document.getElementById("ist_result").value = res;
}

function nust() {
    var tmetric = document.getElementById("nust_tmetric").value;
    var metric = document.getElementById("nust_metric").value;
    var inter = document.getElementById("nust_inter").value;
    var tinter = document.getElementById("nust_tinter").value;
    var test = document.getElementById("nust_test").value;
    var ttest = document.getElementById("nust_ttest").value;


    var res = (+inter / tinter * 15) + (test / ttest * 75) + (metric / tmetric * 10);

    document.getElementById("nust_result").value = res;
}

function pieas() {
    var tmetric = document.getElementById("pieas_tmetric").value;
    var metric = document.getElementById("pieas_metric").value;
    var inter = document.getElementById("pieas_inter").value;
    var tinter = document.getElementById("pieas_tinter").value;
    var test = document.getElementById("pieas_test").value;
    var ttest = document.getElementById("pieas_ttest").value;


    var res = (+inter / tinter * 25) + (test / ttest * 60) + (metric / tmetric * 15);

    document.getElementById("pieas_result").value = res;
}


function giki() {
    var tmetric = document.getElementById("giki_tmetric").value;
    var metric = document.getElementById("giki_metric").value;
    var inter = document.getElementById("giki_inter").value;
    var tinter = document.getElementById("giki_tinter").value;
    var test = document.getElementById("giki_test").value;
    var ttest = document.getElementById("giki_ttest").value;


    var res = (+inter / tinter * 10) + (test / ttest * 85) + (metric / tmetric * 5);

    document.getElementById("giki_result").value = res;
}


function comsats() {
    var tmetric = document.getElementById("comsats_tmetric").value;
    var metric = document.getElementById("comsats_metric").value;
    var inter = document.getElementById("comsats_inter").value;
    var tinter = document.getElementById("comsats_tinter").value;
    var test = document.getElementById("comsats_test").value;
    var ttest = document.getElementById("comsats_ttest").value;


    var res = (+inter / tinter * 40) + (test / ttest * 50) + (metric / tmetric * 10);

    document.getElementById("comsats_result").value = res;
}


function nuces() {

    var inter = document.getElementById("nuces_inter").value;
    var tinter = document.getElementById("nuces_tinter").value;
    var test = document.getElementById("nuces_test").value;
    var ttest = document.getElementById("nuces_ttest").value;


    var res = (+inter / tinter * 50) + (test / ttest * 50);

    document.getElementById("nuces_result").value = res;
}