const express =require('express'); //node.js에서 express 라이브러리를 불러오는 코드
const app =express();  //express 인스턴스 생성후 app변수에 할당
const PORT =process.env.PORT || 3000; //서버가 리스닝 포트 설정
const opn =require('opn'); //브라우저로 감(opn-js기반,open-mjs기반)

app.get('/',(req,res) =>{
    res.send("hi~"); //요청후 응답 하면 hi 라는 문구가 뜰거임 /기반으로
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); //서버가 지정된 포트 실행 콘솔 포트번호 출력
    opn(`http://localhost:${PORT}`); //서버 실행시 브라우저 열림
});