let years= Number(prompt('Nhap nam muon kiem tra: '));

if((years % 4===0 && years%100 !==0 && years % 400 !==0)||(years % 100===0 && years % 400===0)){
    alert(years + ' la nam nhuan');
}else {
    alert(years+ ' khong phai la nam thuan')
}