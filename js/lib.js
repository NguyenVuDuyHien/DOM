function giaiHe() {
        let a = Number(document.getElementById("a").value);
        let b = Number(document.getElementById("b").value);
        let c = Number(document.getElementById("c").value);
        let d = Number(document.getElementById("d").value);
        let e = Number(document.getElementById("e").value);
        let f = Number(document.getElementById("f").value);

        let D = a * e - b * d;
        let Dx = c * e - b * f;
        let Dy = a * f - c * d;

        let ketqua = document.getElementById("ketqua");

    if (D == 0) {
        if (Dx == 0 && Dy == 0) {
        ketqua.innerHTML = "Hệ phương trình vô số nghiệm";
    } else {
        ketqua.innerHTML = "Hệ phương trình vô nghiệm";
    }
    } else {
        let x = Dx / D;
        let y = Dy / D;
        ketqua.innerHTML = "Nghiệm: x = " + x + ", y = " + y;
    }
}