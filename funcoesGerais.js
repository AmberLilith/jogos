function replace(str, str1, str2){
	var novaStr = "";
	for(i = 0; i < str.length;i++){
		if(str[i] == str1){
			novaStr += str2;
		}else{
			novaStr += str[i];
		}
	}
	return novaStr;
}