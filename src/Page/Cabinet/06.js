import React, {useEffect, useState} from "react";
import Ibs from '../atsess/ibs-2.jpg'
import { useHistory } from "react-router-dom";
import {Container, Img, Navbar, User, Content, Question, Variant, Box, Finished, Home} from './style'
import axios from "axios";
import { toast } from 'react-toastify'
import {Block, Minut, BlockItem} from "./component/style";


function Cabinet({name, surname}) {
    const history = useHistory();
    const [ minut, setMinut ] = useState(30);
    const [ second, setSecond ] = useState(0);
    const [dis, setDis] = useState(false);
    const [ dist, setDist ] = useState(false);
    const [yashil,setYashil] = useState('');
    const [qizil,setQizil] = useState('');
    const [disBtn,setDisBtn] = useState(false);
    const [test1, setTest1] = useState(false);
    const [test2, setTest2] = useState(false);
    const [test3, setTest3] = useState(false);
    const [test4, setTest4] = useState(false);
    const [test5, setTest5] = useState(false);
    const [test6, setTest6] = useState(false);
    const [test7, setTest7] = useState(false);
    const [test8, setTest8] = useState(false);
    const [test9, setTest9] = useState(false);
    const [test10, setTest10] = useState(false);
    const [test11, setTest11] = useState(false);
    const [test12, setTest12] = useState(false);
    const [test13, setTest13] = useState(false);
    const [test14, setTest14] = useState(false);
    const [test15, setTest15] = useState(false);
    const [test16, setTest16] = useState(false);
    const [test17, setTest17] = useState(false);
    const [test18, setTest18] = useState(false);
    const [test19, setTest19] = useState(false);
    const [test20, setTest20] = useState(false);
    const [test21, setTest21] = useState(false);
    const [test22, setTest22] = useState(false);
    const [test23, setTest23] = useState(false);
    const [test24, setTest24] = useState(false);
    const [test25, setTest25] = useState(false);
    const [test26, setTest26] = useState(false);
    const [test27, setTest27] = useState(false);
    const [test28, setTest28] = useState(false);
    const [test29, setTest29] = useState(false);
    const [test30, setTest30] = useState(false);
    // const [test31, setTest31] = useState(false);
    // const [test32, setTest32] = useState(false);
    // const [test33, setTest33] = useState(false);
    // const [test34, setTest34] = useState(false);
    // const [test35, setTest35] = useState(false);
    // const [test36, setTest36] = useState(false);
    // const [test37, setTest37] = useState(false);
    // const [test38, setTest38] = useState(false);
    // const [test39, setTest39] = useState(false);
    // const [test40, setTest40] = useState(false);
    // const [test41, setTest41] = useState(false);
    // const [test42, setTest42] = useState(false);
    // const [test43, setTest43] = useState(false);
    // const [test44, setTest44] = useState(false);
    // const [test45, setTest45] = useState(false);
    // const [test46, setTest46] = useState(false);
    // const [test47, setTest47] = useState(false);
    // const [test48, setTest48] = useState(false);
    // const [test49, setTest49] = useState(false);
    // const [test50, setTest50] = useState(false);
    // const [test51, setTest51] = useState(false);
    // const [test52, setTest52] = useState(false);
    // const [test53, setTest53] = useState(false);
    // const [test54, setTest54] = useState(false);
    // const [test55, setTest55] = useState(false);
    // const [test56, setTest56] = useState(false);
    // const [test57, setTest57] = useState(false);
    // const [test58, setTest58] = useState(false);
    // const [test59, setTest59] = useState(false);
    // const [test60, setTest60] = useState(false);
    // const [test61, setTest61] = useState(false);
    // const [test62, setTest62] = useState(false);
    // const [test63, setTest63] = useState(false);
    // const [test64, setTest64] = useState(false);
    // const [test65, setTest65] = useState(false);
    // const [test66, setTest66] = useState(false);
    // const [test67, setTest67] = useState(false);
    // const [test68, setTest68] = useState(false);
    // const [test69, setTest69] = useState(false);
    // const [test70, setTest70] = useState(false);

    const a = [];
    let b = 0;
    let c = 0;
    function GoHome() { history.push('/') }
    // ---------- Submit ----------
    function Submit() {
        setMinut(0);
        setSecond(0);
        setDist(true);
        setDisBtn(true);
        a.push( test1, test2, test3, test4, test5, test6, test7, test8, test9, test10, test11, test12, test13, test14, test15,
            test16, test17, test18, test19, test20, test21, test22, test23, test24, test25, test26, test27, test28, test29, test30,
            // test31, test32, test33, test34, test35, test36, test37, test38, test39, test40, test41, test42, test43, test44, test45,
            // test46, test47, test48, test49, test50, test51, test52, test53, test54, test55, test56, test57, test58, test59, test60,
            // test61, test62, test63, test64, test65, test66, test67, test68, test69, test70
        );
        a.map( (item) => {
            if (item !== false) {
                b++
            }else {
                c++
            }

        })
        setYashil(b);
        function precent(s, num){
            return parseInt((s / 30) * num)
        }
        let j = precent(100,b);
        setQizil(j);
        const messageText =
            `${name + ' ' + surname}\n` +
            `✅ ${b} \n` +
            `❌ ${c} \n` +
            `${j + '%'} \n`;
        const token = "2092444366:AAEvvw5ReNLPpJOrlyIrR4AgxyaMqTsoCoA";
        const api = `https://api.telegram.org/bot${token}/sendMessage`;
        axios.post(api, {chat_id: "-673924757", text: messageText, parse_mode: "html"})
            .then(() => {
                toast.success('✔ Topshirildi');
                setDis(true);
            })
            .catch((e) => {
                toast.error("❗ Error try again")
                console.log(e)
                setDisBtn(false);
            })
    }
    // ---------- Submit ----------

    // ---------- Time ------------
    useEffect(()=>{
        if(dist !== true){
            let time =  setInterval(()=>{
                if(second === 0){
                    setMinut(minut-1)
                    setSecond(59)
                }
                else {
                    setSecond(second - 1)
                }
                if(minut === 0 && second === 0){
                    toast.warning('vaqt tugadi')
                    setSecond(0)
                    setMinut(0)
                    Submit()
                }
            },1000)
            return()=>{
                clearInterval(time)
            }
        }
    })

    return (
        <div id={'home'}>
            <Block>
                <Minut> {minut}  {" : "} {second}</Minut>
            </Block>

            <Home onClick={GoHome}> <b className="bi bi-house-fill"> Home </b> </Home>
            <Container>
                <Navbar>
                    <Img src={Ibs} alt={''}/>
                    { dis ? <h1>Check your answer</h1> : <h1> HTML CSS Test </h1> }
                </Navbar>
                <User>{name} {surname}</User>
                {
                    dis ? <BlockItem>
                            <h3> Sizning natijangiz </h3>
                            <p>
                                <b>30 dan {yashil} ta ( {qizil} %)</b>
                            </p>
                        </BlockItem>
                        : ''
                }
                {/* --------------------------- Question 1 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 1. Css Internal usli qanday ?</h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i1'} onClick={()=>setTest1(false)}>
                            <input type="radio" id={'i1'} name={'input1'}/>
                            <label> A) Tagni o'zida css yozish  </label>
                        </Box>
                        <Box htmlFor={'i2'} onClick={()=>setTest1(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i2'} name={'input1'}/>
                            <label> B) Head tagini ichida css yozish   </label>
                        </Box>
                        <Box htmlFor={'i3'} onClick={()=>setTest1(false)} >
                            <input type="radio" id={'i3'} name={'input1'}/>
                            <label> C) Title taglari orasida css yozish  </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 2 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 2. 1vh  birligi  qaysi variantda to'g'ri ko'rsatilgan ?  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i5'} onClick={()=>setTest2(false)}>
                            <input type="radio" id={'i5'} name={'input2'}/>
                            <label> A)  Ekran kengligining 1%  </label>
                        </Box>
                        <Box htmlFor={'i6'} onClick={()=>setTest2(false)}>
                            <input type="radio" id={'i6'} name={'input2'}/>
                            <label> B)  Ekran uzunligining 10% </label>
                        </Box>
                        <Box htmlFor={'i7'} onClick={()=>setTest2(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i7'} name={'input2'}/>
                            <label> C) Ekran balandligining 1%  </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 3 ---------------------------*/}
                <Content>
                    <Question>
                        <h3>  To'g'ri yozilgan  Checkboxni belgilang  ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i19'} onClick={()=>setTest3(false)}>
                            <input type="radio" id={'i19'} name={'input3'}/>
                            <label> A) {'<checkbox>'}  </label>
                        </Box>
                        <Box htmlFor={'i20'} onClick={()=>setTest3(false)}>
                            <input type="radio" id={'i20'} name={'input3'}/>
                            <label> B) {'<input type="check">'} </label>
                        </Box>
                        <Box htmlFor={'i21'} onClick={()=>setTest3(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i21'} name={'input3'}/>
                            <label> C) {'<input type="checkbox">'} </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 4 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 4. Display paramaetri Block bolgan elemntlarni belgilang  ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i23'} onClick={()=>setTest4(false)}>
                            <input type="radio" id={'i23'} name={'input4'}/>
                            <label> A){' <div> / <button> / <i>  '}  </label>
                        </Box>
                        <Box htmlFor={'i24'} onClick={()=>setTest4(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i24'} name={'input4'}/>
                            <label> B) {'<div> / <p> /  <h1>'} </label>
                        </Box>
                        <Box htmlFor={'i25'} onClick={()=>setTest4(false)}>
                            <input type="radio" id={'i25'} name={'input4'}/>
                            <label> C) {'<label> / <div> / <span> '} </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 5 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 5. Matn maydonini yaratish uchun to'g'ri kodni  toping!  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i27'} onClick={()=>setTest5(false)}>
                            <input type="radio" id={'i27'} name={'input5'}/>
                            <label> A) {'<input type="textbox">'}  </label>
                        </Box>
                        <Box htmlFor={'i28'} onClick={()=>setTest5(false)}>
                            <input type="radio" id={'i28'} name={'input5'}/>
                            <label> B) {'<input type="textarea">'} </label>
                        </Box>
                        <Box htmlFor={'i29'} onClick={()=>setTest5(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i29'} name={'input5'}/>
                            <label> C)  {'<textarea>'} </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 6 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 6. Span elementiga margin:auto; border-radius:50%; backgroun:red;  qanday holat bo'ladi  </h3>
                    </Question>
                    <Variant>

                        <Box htmlFor={'i32'} onClick={()=>setTest6(false)}>
                            <input type="radio" id={'i32'} name={'input6'}/>
                            <label> A)   span o'rtaga turadi va dumaloq holatga keladi va orqa foni qizil bo'ladi</label>

                        </Box>

                        <Box htmlFor={'i31'} onClick={()=>setTest6(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i31'} name={'input6'}/>
                            <label> C)   span joyida turadi va dumaloq holatga keladi va orqa foni qizil bo'ladi    </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 7 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 7. Biror bir elementga postion absolute berilsa default holda qaysi element uni otasi hisoblanadi ?   </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i35'} onClick={()=>setTest7(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i35'} name={'input7'}/>
                            <label> A) Body elementi </label>
                        </Box>
                        <Box htmlFor={'i36'} onClick={()=>setTest7(false)}>
                            <input type="radio" id={'i36'} name={'input7'}/>
                            <label> B) O'sha elementdan oldin turgan element  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 8 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 8.  Elementga position fixed berilganda margin ishlatsa  ishlaydimi ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i39'} onClick={()=>setTest8(false)}>
                            <input type="radio" id={'i39'} name={'input8'}/>
                            <label> A) {'Yo\'q'} </label>
                        </Box>
                        <Box htmlFor={'i40'} onClick={()=>setTest8(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i40'} name={'input8'}/>
                            <label> B) Ha </label>
                        </Box>
                        {/* <Box htmlFor={'i41'} onClick={()=>setTest8(false)}>
                            <input type="radio" id={'i41'} name={'input8'}/>
                            <label> C) colour blue. </label>
                        </Box> */}
                    </Variant>
                </Content>
                {/* --------------------------- Question 9 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 9. Media Querydagi screen codi nimani anglatadi ?  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i43'} onClick={()=>setTest9(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i43'} name={'input9'}/>
                            <label> A)  Ekran 0 dan boshlanayotganini  </label>
                        </Box>
                        <Box htmlFor={'i44'} onClick={()=>setTest9(false)}>
                            <input type="radio" id={'i44'} name={'input9'}/>
                            <label> B)  Ekran 0 dan boshlanib 1200px da tugaydi </label>
                        </Box>
                        <Box htmlFor={'i45'} onClick={()=>setTest9(false)}>
                            <input type="radio" id={'i45'} name={'input9'}/>
                            <label> C)  Ekran 0 dan boshlanib 600px da tugaydi </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 10 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 10.  Bizda 4ta button bor ular yonma-yon chiqishi uchun nima qilishimimz kerak ?  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i47'} onClick={()=>setTest10(false)}>
                            <input type="radio" id={'i47'} name={'input10'}/>
                            <label> A) Buttonlarni o'rab turgan elementga display flex berishimiz kerak </label>
                        </Box>
                        <Box htmlFor={'i48'} onClick={()=>setTest10(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i48'} name={'input10'}/>
                            <label> B)  Hech narsa qilmaymiz  </label>
                        </Box>
                        <Box htmlFor={'i49'} onClick={()=>setTest10(false)}>
                            <input type="radio" id={'i49'} name={'input10'}/>
                            <label> C)  Buttonlarga position absolute beishimiz kerak   </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 11 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 11. Sass da o'zgaruvchilar qanday yoziladi ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i50'} onClick={()=>setTest11(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i50'} name={'input11'}/>
                            <label> A)  $MyColor : #000   </label>
                        </Box>
                        <Box htmlFor={'i51'} onClick={()=>setTest11(false)}>
                            <input type="radio" id={'i51'} name={'input11'}/>
                            <label> B)  $MyColor = #000  </label>
                        </Box>
                        <Box htmlFor={'i52'} onClick={()=>setTest11(false)}>
                            <input type="radio" id={'i52'} name={'input11'}/>
                            <label> C) $MyColor - #000 </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 12 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 12.  Translate:transform(10deg)  Kod to'g'ri yozilganmi  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i53'} onClick={()=>setTest12(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i53'} name={'input12'}/>
                            <label> A) {'Xato'} </label>
                        </Box>
                        <Box htmlFor={'i54'} onClick={()=>setTest12(false)}>
                            <input type="radio" id={'i54'} name={'input12'}/>
                            <label> B) {'Tog\'ri'}  </label>
                        </Box>
                        {/*<Box htmlFor={'i55'} onClick={()=>setTest12(false)} className={`${dis ? 'success' : ''}`}>*/}
                        {/*    <input type="radio" id={'i55'} name={'input12'}/>*/}
                        {/*    <label> C) behind  </label>*/}
                        {/*</Box> */}

                    </Variant>
                </Content>
                {/* --------------------------- Question 13 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 13. Box-shadow  ga beriladigan uchinchi qiymat qanday vazifani bajaradi ?</h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i56'} onClick={()=>setTest13(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i56'} name={'input13'}/>
                            <label> A)  Soyaning yoyilishi  </label>
                        </Box>
                        <Box htmlFor={'i57'} onClick={()=>setTest13(false)}>
                            <input type="radio" id={'i57'} name={'input13'}/>
                            <label> B) Soyaning tepadan pastga surilishi  </label>
                        </Box>
                        <Box htmlFor={'i58'} onClick={()=>setTest13(false)}>
                            <input type="radio" id={'i58'} name={'input13'}/>
                            <label> C)  Soyaning chapdan o'nga surilishi </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 14 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 14.  Background:url();  shunday yozsa kod ishlaydimi? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i59'} onClick={()=>setTest14(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i59'} name={'input14'}/>
                            <label> A) Ha ishlaydi </label>
                        </Box>
                        <Box htmlFor={'i60'} onClick={()=>setTest14(false)}>
                            <input type="radio" id={'i60'} name={'input14'}/>
                            <label> B) Yo'q ishlamaydi Background-size ga yozish kerak </label>
                        </Box>
                        <Box htmlFor={'i61'} onClick={()=>setTest14(false)}>
                            <input type="radio" id={'i61'} name={'input14'}/>
                            <label> C)Yo'q ishlamaydi Background-image ga yozish kerak</label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 15 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 15.  Div elementi ichida  text yozilgan bitta button bor
                            divni opacity:0; qilib  buttonga z-index:1; va background:red; qilsak qanday holat yuz beradi ? </h3>
                    </Question>
                    <Variant>

                        <Box htmlFor={'i63'} onClick={()=>setTest15(false)}>
                            <input type="radio" id={'i63'} name={'input15'}/>
                            <label> A) Div korinmay qoladi Button  bitta oldinga chiqadi va backgroundi qizil bo'lib chiqadi  </label>
                        </Box>
                        <Box htmlFor={'i64'} onClick={()=>setTest15(false)}>
                            <input type="radio" id={'i64'} name={'input15'}/>
                            <label> B) Div ko'rinmay qoladi Button divni yoniga chiqib qoladi backgroundi qizil bo'lib  </label>
                        </Box>
                        <Box htmlFor={'i62'} onClick={()=>setTest15(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i62'} name={'input15'}/>
                            <label> C) Div ham Button ham ko'rinmay qoladi </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 16 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 16. {'<ul>'} tagi ichida {'<li> <a> salom </a> </li> '}
                            elemntlari bor {"<ul>"} ga color:red; va text-decoration:none; bersak nima o'zgaradi ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i65'} onClick={()=>setTest16(false)}>
                            <input type="radio" id={'i65'} name={'input16'}/>
                            <label> A)  salom so'zi qizil bo'ladi va tagidagi chiziq yo'qoladi  </label>
                        </Box>
                        <Box htmlFor={'i66'} onClick={()=>setTest16(false)}>
                            <input type="radio" id={'i66'} name={'input16'}/>
                            <label> B)  Faqat salom so'zi qizil bo'ladi tagidagi chiqiz turaveradi  </label>
                        </Box>
                        <Box htmlFor={'i67'} onClick={()=>setTest16(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i67'} name={'input16'}/>
                            <label> C)  Xech narsa o'zgarmaydi  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 17 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 17. Qaysi CSS xususiyati text hajmini boshqaradi? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i670'} onClick={()=>setTest17(false)}>
                            <input type="radio" id={'i670'} name={'input17'}/>
                            <label> A) fon-size </label>
                        </Box>
                        <Box htmlFor={'i68'} onClick={()=>setTest17(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i68'} name={'input17'}/>
                            <label> B) font-size </label>
                        </Box>
                        <Box htmlFor={'i69'} onClick={()=>setTest17(false)}>
                            <input type="radio" id={'i69'} name={'input17'}/>
                            <label> C) text-size </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 18 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 18. Bootstrapda necha xil rang bor? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i70'} onClick={()=>setTest18(false)}>
                            <input type="radio" id={'i70'} name={'input18'}/>
                            <label> A) 9 ta   </label>
                        </Box>
                        <Box htmlFor={'i71'} onClick={()=>setTest18(false)}>
                            <input type="radio" id={'i71'} name={'input18'}/>
                            <label> B) 8 ta </label>
                        </Box>
                        <Box htmlFor={'i72'} onClick={()=>setTest18(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i72'} name={'input18'}/>
                            <label> C)  10 ta </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 19 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 19. {'<Ul>'} ichida {'<li>'} tagi oldidan chiqadigan qora nuqtani qanday yo'q qilsa bo'ladi ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i73'} onClick={()=>setTest19(false)}>
                            <input type="radio" id={'i73'} name={'input19'}/>
                            <label> A)  text-decoration:none;  </label>
                        </Box>
                        <Box htmlFor={'i74'} onClick={()=>setTest19(false)}>
                            <input type="radio" id={'i74'} name={'input19'}/>
                            <label> B) list-item:none;  </label>
                        </Box>
                        <Box htmlFor={'i75'} onClick={()=>setTest19(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i75'} name={'input19'}/>
                            <label> C) list-style:none;  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 20 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 20.  box-shadow: 30px 20px 10px red ;  ekranda qanday ko'rinadi ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i76'} onClick={()=>setTest20(false)}>
                            <input type="radio" id={'i76'} name={'input20'}/>
                            <label> A)  tepadan pastga 30px, chapdan o'nga 20px, yoyilishi 10px, rangi qizil  bo'lib ko'rinadi  </label>
                        </Box>
                        <Box htmlFor={'i770'} onClick={()=>setTest20(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i770'} name={'input20'}/>
                            <label> B) chapdan o'nga 30px, tepadan pastga 20px, yoyilishi 10px, rangi qizil bo'lib ko'rinadi </label>
                        </Box>
                        <Box htmlFor={'i77'} onClick={()=>setTest20(false)}>
                            <input type="radio" id={'i77'} name={'input20'}/>
                            <label> C)  o'ngdan chapga 30px, pastdan tepaga 20px, yoyilishi 10px, rangi qizil bo'lib ko'rinadi  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 21 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 21. Gradient rang berishni necha xili bor ?  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i78'} onClick={()=>setTest21(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i78'} name={'input21'}/>
                            <label> A) 2 xil   </label>
                        </Box>
                        <Box htmlFor={'i79'} onClick={()=>setTest21(false)}>
                            <input type="radio" id={'i79'} name={'input21'}/>
                            <label> B) 3 xil   </label>
                        </Box>
                        <Box htmlFor={'i80'} onClick={()=>setTest21(false)}>
                            <input type="radio" id={'i80'} name={'input21'}/>
                            <label> C) 4 xil    </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 22 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 22. Animatsiyani  har doim  ishlashi  uchun qaysi xususiyat ishlatiladi ?  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i81'} onClick={()=>setTest22(false)}>
                            <input type="radio" id={'i81'} name={'input22'}/>
                            <label> A) linear </label>
                        </Box>
                        <Box htmlFor={'i82'} onClick={()=>setTest22(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i82'} name={'input22'}/>
                            <label> B) infinite </label>
                        </Box>
                        <Box htmlFor={'i83'} onClick={()=>setTest22(false)}>
                            <input type="radio" id={'i83'} name={'input22'}/>
                            <label> C)  inherit  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 23 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 23. Position fixed nima vazifani bajaradi ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i84'} onClick={()=>setTest23(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i84'} name={'input23'}/>
                            <label> A) Oynaga nisbatan berilgan tagni, istalgan joyiga qotirib qo'yish imkonini beradi </label>
                        </Box>
                        <Box htmlFor={'i85'} onClick={()=>setTest23(false)}>
                            <input type="radio" id={'i85'} name={'input23'}/>
                            <label> B) Elementlarni faqat tepaga yopishtirish imkonini beradi  </label>
                        </Box>
                        <Box htmlFor={'i86'} onClick={()=>setTest23(false)}>
                            <input type="radio" id={'i86'} name={'input23'}/>
                            <label> C) Faqat pastga va tepaga qotirib qo'yish uchun ishlatiladi </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 24 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 24. Textlarni ikki tomondan tekslaydigan kodni toping ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i87'} onClick={()=>setTest24(false)}>
                            <input type="radio" id={'i87'} name={'input24'}/>
                            <label> A) text-align: center;  </label>
                        </Box>
                        <Box htmlFor={'i88'} onClick={()=>setTest24(false)}>
                            <input type="radio" id={'i88'} name={'input24'}/>
                            <label> B) text-align: flex;  </label>
                        </Box>
                        <Box htmlFor={'i89'} onClick={()=>setTest24(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i89'} name={'input24'}/>
                            <label> C) text-align: justify;  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 25 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 25. Display parametri inline bo'lgan taglarni belgilang ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i90'} onClick={()=>setTest25(false)}>
                            <input type="radio" id={'i90'} name={'input25'}/>
                            <label> A)  {'<span> , <b> , <i> , <div> , <img />'}  </label>
                        </Box>
                        <Box htmlFor={'i91'} onClick={()=>setTest25(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i91'} name={'input25'}/>
                            <label> B) {'<span> , <b> , <i> , <button> , <img />'}   </label>
                        </Box>
                        <Box htmlFor={'i92'} onClick={()=>setTest25(false)}>
                            <input type="radio" id={'i92'} name={'input25'}/>
                            <label> C) {'<span> , <b> , <i> , <p> ,  <button>'}  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 26 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 26. Position relative ni vazifasi nima ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i93'} onClick={()=>setTest26(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i93'} name={'input26'}/>
                            <label> A) absolute elementni otasini ichida qoldirish uchun </label>
                        </Box>
                        <Box htmlFor={'i94'} onClick={()=>setTest26(false)}>
                            <input type="radio" id={'i94'} name={'input26'}/>
                            <label> B) tepa qismga yopishtirish uchun  </label>
                        </Box>
                        <Box htmlFor={'i95'} onClick={()=>setTest26(false)}>
                            <input type="radio" id={'i95'} name={'input26'}/>
                            <label> C) tepa pastga harakatlantish uchun </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 27 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 27. Bitta class ni faqat bitta joyda ishlata olamiz </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'i96'} onClick={()=>setTest27(false)}>
                            <input type="radio" id={'i96'} name={'input27'}/>
                            <label> A) {'Tog\'ri'}  </label>
                        </Box>
                        <Box htmlFor={'i97'} onClick={()=>setTest27(true)}  className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i97'} name={'input27'}/>
                            <label> B) Xato  </label>
                        </Box>
                        {/* <Box htmlFor={'i98'} onClick={()=>setTest27(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'i98'} name={'input27'}/>
                            <label> C) to see  </label>
                        </Box> */}

                    </Variant>
                </Content>
                {/* --------------------------- Question 28 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 28.  @media (min:600px and max:768px);  Kod to'g'ri yozilganmi ?  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x1'} onClick={()=>setTest28(false)}>
                            <input type="radio" id={'x1'} name={'input28'}/>
                            <label> A) {"tog\'ri"}  </label>
                        </Box>
                        <Box htmlFor={'x2'} onClick={()=>setTest28(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x2'} name={'input28'}/>
                            <label> B) Xato </label>
                        </Box>
                        {/* <Box htmlFor={'x3'} onClick={()=>setTest28(false)}>
                            <input type="radio" id={'x3'} name={'input28'}/>
                            <label> C) many years has  </label>
                        </Box> */}

                    </Variant>
                </Content>
                {/* --------------------------- Question 29 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 29.  transform:scale; qanday vazifani bajaradi ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x4'} onClick={()=>setTest29(false)}>
                            <input type="radio" id={'x4'} name={'input29'}/>
                            <label> A)  Elementni ma'lum bir gradusda burishda ishlatiladi  </label>
                        </Box>
                        <Box htmlFor={'x5'} onClick={()=>setTest29(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x5'} name={'input29'}/>
                            <label> B)  Elementni baravar miqdorda kattalashtirishda ishlatiladi  </label>
                        </Box>
                        <Box htmlFor={'x6'} onClick={()=>setTest29(false)}>
                            <input type="radio" id={'x6'} name={'input29'}/>
                            <label> C)  Elementni ma'lim bir miqdorda burish uchun ishlatiladi  </label>
                        </Box>

                    </Variant>
                </Content>
                {/* --------------------------- Question 30 ---------------------------*/}
                <Content>
                    <Question>
                        <h3> 30. Element ni 30 gradus burchak ostida burish uchun to'g'ri kodni toping ? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x7'} onClick={()=>setTest30(false)}>
                            <input type="radio" id={'x7'} name={'input30'}/>
                            <label> A) transform: rotate(30px)  </label>
                        </Box>
                        <Box htmlFor={'x8'} onClick={()=>setTest30(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x8'} name={'input30'}/>
                            <label> B) transform: rotate(30deg)  </label>
                        </Box>
                        <Box htmlFor={'x9'} onClick={()=>setTest30(false)}>
                            <input type="radio" id={'x9'} name={'input30'}/>
                            <label> C) transform: skew(30deg)  </label>
                        </Box>
                    </Variant>
                </Content>
                {/* --------------------------- Question 31 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 31. “_____ her name Eliza?” “No, _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x10'} onClick={()=>setTest31(false)}>
                            <input type="radio" id={'x10'} name={'input31'}/>
                            <label> A) What / it isn’t </label>
                        </Box>
                        <Box htmlFor={'x11'} onClick={()=>setTest31(false)}>
                            <input type="radio" id={'x11'} name={'input31'}/>
                            <label> B) Is / she isn’t </label>
                        </Box>
                        <Box htmlFor={'x12'} onClick={()=>setTest31(false)}>
                            <input type="radio" id={'x12'} name={'input31'}/>
                            <label> C) Is / it is not  </label>
                        </Box>
                        <Box htmlFor={'x13'} onClick={()=>setTest31(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x13'} name={'input31'}/>
                            <label> D) Is / it isn’t  </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 32 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 32. Is your surname Anderson? </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x14'} onClick={()=>setTest32(false)}>
                            <input type="radio" id={'x14'} name={'input32'}/>
                            <label> A) Yes, you are. </label>
                        </Box>
                        <Box htmlFor={'x15'} onClick={()=>setTest32(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x15'} name={'input32'}/>
                            <label> B) Yes, it is. </label>
                        </Box>
                        <Box htmlFor={'x16'} onClick={()=>setTest32(false)}>
                            <input type="radio" id={'x16'} name={'input32'}/>
                            <label> C) Yes, I am. </label>
                        </Box>
                        <Box htmlFor={'x17'} onClick={()=>setTest32(false)}>
                            <input type="radio" id={'x17'} name={'input32'}/>
                            <label> D) Yes, my is. </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 33 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 33. “Is she American?” “No, _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x18'} onClick={()=>setTest33(false)}>
                            <input type="radio" id={'x18'} name={'input33'}/>
                            <label> A) hers isn’t </label>
                        </Box>
                        <Box htmlFor={'x19'} onClick={()=>setTest33(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x19'} name={'input33'}/>
                            <label> B) she isn’t </label>
                        </Box>
                        <Box htmlFor={'x20'} onClick={()=>setTest33(false)}>
                            <input type="radio" id={'x21'} name={'input33'}/>
                            <label> C) she is not </label>
                        </Box>
                        <Box htmlFor={'x22'} onClick={()=>setTest33(false)}>
                            <input type="radio" id={'x22'} name={'input33'}/>
                            <label> D) she her isn’t </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 34 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 34. “____ their names Jack & Benny?” “Yes, _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x23'} onClick={()=>setTest34(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x23'} name={'input34'}/>
                            <label> A) Are / they are </label>
                        </Box>
                        <Box htmlFor={'x24'} onClick={()=>setTest34(false)}>
                            <input type="radio" id={'x24'} name={'input34'}/>
                            <label> B) Aren’t / there are </label>
                        </Box>
                        <Box htmlFor={'x25'} onClick={()=>setTest34(false)}>
                            <input type="radio" id={'x25'} name={'input34'}/>
                            <label> C) Am / their </label>
                        </Box>
                        <Box htmlFor={'x26'} onClick={()=>setTest34(false)}>
                            <input type="radio" id={'x26'} name={'input34'}/>
                            <label> D) Is / they’re </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 35 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 35. “Is your dog 2 years old?” “Yes, _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x27'} onClick={()=> setTest35(false)}>
                            <input type="radio" id={'x27'} name={'input35'}/>
                            <label> A) it’s  </label>
                        </Box>
                        <Box htmlFor={'x28'} onClick={()=> setTest35(false)}>
                            <input type="radio" id={'x28'} name={'input35'}/>
                            <label> B) dog is  </label>
                        </Box>
                        <Box htmlFor={'x29'} onClick={()=> setTest35(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x29'} name={'input35'}/>
                            <label> C) it is  </label>
                        </Box>
                        <Box htmlFor={'x30'} onClick={()=> setTest35(false)}>
                            <input type="radio" id={'x30'} name={'input35'}/>
                            <label> D) its </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 36 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 36. “Is your elder brother married?” “No, _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x31'} onClick={()=>setTest36(false)}>
                            <input type="radio" id={'x31'} name={'input36'}/>
                            <label> A) brother isn’t </label>
                        </Box>
                        <Box htmlFor={'x32'} onClick={()=>setTest36(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x32'} name={'input36'}/>
                            <label> B) he isn’t </label>
                        </Box>
                        <Box htmlFor={'x33'} onClick={()=>setTest36(false)}>
                            <input type="radio" id={'x33'} name={'input36'}/>
                            <label> C) he is not  </label>
                        </Box>
                        <Box htmlFor={'x34'} onClick={()=>setTest36(false)}>
                            <input type="radio" id={'x34'} name={'input36'}/>
                            <label> D) she isn’t  </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 37 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 37. “Are you from Senegal?” “No, _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x35'} onClick={()=>setTest37(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x35'} name={'input37'}/>
                            <label> A) I’m not </label>
                        </Box>
                        <Box htmlFor={'x36'} onClick={()=>setTest37(false)}>
                            <input type="radio" id={'x36'} name={'input37'}/>
                            <label> B) I amn’t  </label>
                        </Box>
                        <Box htmlFor={'x37'} onClick={()=>setTest37(false)}>
                            <input type="radio" id={'x37'} name={'input37'}/>
                            <label> C) I are not </label>
                        </Box>
                        <Box htmlFor={'x38'} onClick={()=>setTest37(false)}>
                            <input type="radio" id={'x38'} name={'input37'}/>
                            <label> D) I not </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 38 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 38. “_____ Martha English?” “Yes, she _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x39'} onClick={()=>setTest38(false)}>
                            <input type="radio" id={'x39'} name={'input38'}/>
                            <label> A) Is / isn’t  </label>
                        </Box>
                        <Box htmlFor={'x40'} onClick={()=>setTest38(false)}>
                            <input type="radio" id={'x40'} name={'input38'}/>
                            <label> B) Are / is  </label>
                        </Box>
                        <Box htmlFor={'x41'} onClick={()=>setTest38(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x41'} name={'input38'}/>
                            <label> C) Is / is  </label>
                        </Box>
                        <Box htmlFor={'x42'} onClick={()=>setTest38(false)}>
                            <input type="radio" id={'x42'} name={'input38'}/>
                            <label> D) Are / is  </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 39 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 39. “_____ her surname Smith?” “No, it _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x43'} onClick={()=>setTest39(false)}>
                            <input type="radio" id={'x43'} name={'input39'}/>
                            <label> A) What / isn’t </label>
                        </Box>
                        <Box htmlFor={'x44'} onClick={()=>setTest39(false)}>
                            <input type="radio" id={'x44'} name={'input39'}/>
                            <label> B) Is / is </label>
                        </Box>
                        <Box htmlFor={'x45'} onClick={()=>setTest39(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x45'} name={'input39'}/>
                            <label> C) Is / isn’t  </label>
                        </Box>
                        <Box htmlFor={'x46'} onClick={()=>setTest39(false)}>
                            <input type="radio" id={'x46'} name={'input39'}/>
                            <label> D) Are / isn’t  </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 40 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 40. “Are you a student?” “Yes, I _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x47'} onClick={()=>setTest40(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x47'} name={'input40'}/>
                            <label> A) am </label>
                        </Box>
                        <Box htmlFor={'x48'} onClick={()=>setTest40(false)}>
                            <input type="radio" id={'x48'} name={'input40'}/>
                            <label> B) have </label>
                        </Box>
                        <Box htmlFor={'x49'} onClick={()=>setTest40(false)}>
                            <input type="radio" id={'x49'} name={'input40'}/>
                            <label> C) is </label>
                        </Box>
                        <Box htmlFor={'x50'} onClick={()=>setTest40(false)}>
                            <input type="radio" id={'x50'} name={'input40'}/>
                            <label> D) ‘m not </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 41 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 41. “_____ you from Barcelona?” “No, I’m not.” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x51'} onClick={()=>setTest41(false)}>
                            <input type="radio" id={'x51'} name={'input41'}/>
                            <label> A) Is </label>
                        </Box>
                        <Box htmlFor={'x52'} onClick={()=>setTest41(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x52'} name={'input41'}/>
                            <label> B) Are </label>
                        </Box>
                        <Box htmlFor={'x53'} onClick={()=>setTest41(false)}>
                            <input type="radio" id={'x53'} name={'input41'}/>
                            <label> C) Do </label>
                        </Box>
                        <Box htmlFor={'c53'} onClick={()=>setTest41(false)}>
                            <input type="radio" id={'c53'} name={'input41'}/>
                            <label> D) Where </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 42 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 42. “_____ you married?” “No, I _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x54'} onClick={()=>setTest42(false)}>
                            <input type="radio" id={'x54'} name={'input42'}/>
                            <label> A) Aren’t / am </label>
                        </Box>
                        <Box htmlFor={'x55'} onClick={()=>setTest42(false)}>
                            <input type="radio" id={'x55'} name={'input42'}/>
                            <label> B) Are / am </label>
                        </Box>
                        <Box htmlFor={'x56'} onClick={()=>setTest42(false)}>
                            <input type="radio" id={'x56'} name={'input42'}/>
                            <label> C) Is / am not </label>
                        </Box>
                        <Box htmlFor={'c56'} onClick={()=>setTest42(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'c56'} name={'input42'}/>
                            <label> D) Are / ’m not </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 43 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 43. “_____ is Brenda?” “She’s Patrick’s wife.” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x57'} onClick={()=>setTest43(false)}>
                            <input type="radio" id={'x57'} name={'input43'}/>
                            <label> A) What </label>
                        </Box>
                        <Box htmlFor={'x58'} onClick={()=>setTest43(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x58'} name={'input43'}/>
                            <label> B) Who </label>
                        </Box>
                        <Box htmlFor={'x59'} onClick={()=>setTest43(false)}>
                            <input type="radio" id={'x59'} name={'input43'}/>
                            <label> C) Which </label>
                        </Box>
                        <Box htmlFor={'c59'} onClick={()=>setTest43(false)}>
                            <input type="radio" id={'c59'} name={'input43'}/>
                            <label> D) Where </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 44 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 44. My teacher’s name _ John. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x60'} onClick={()=>setTest44(false)}>
                            <input type="radio" id={'x60'} name={'input44'}/>
                            <label> A) are </label>
                        </Box>
                        <Box htmlFor={'x61'} onClick={()=>setTest44(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x61'} name={'input44'}/>
                            <label> B) is </label>
                        </Box>
                        <Box htmlFor={'x62'} onClick={()=>setTest44(false)}>
                            <input type="radio" id={'x62'} name={'input44'}/>
                            <label> C) am </label>
                        </Box>
                        <Box htmlFor={'c62'} onClick={()=>setTest44(false)}>
                            <input type="radio" id={'c62'} name={'input44'}/>
                            <label> D) not </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 45 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 45. Marcus and Carlos _ my brothers. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x63'} onClick={()=>setTest45(false)}>
                            <input type="radio" id={'x63'} name={'input45'}/>
                            <label> A) is </label>
                        </Box>
                        <Box htmlFor={'x64'} onClick={()=>setTest45(false)}>
                            <input type="radio" id={'x64'} name={'input45'}/>
                            <label> B) am </label>
                        </Box>
                        <Box htmlFor={'x65'} onClick={()=>setTest45(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x65'} name={'input45'}/>
                            <label> C) are </label>
                        </Box>
                        <Box htmlFor={'c65'} onClick={()=>setTest45(false)}>
                            <input type="radio" id={'c65'} name={'input45'}/>
                            <label> D) be </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 46 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 46. My mother and father _ at work. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x66'} onClick={()=>setTest46(false)}>
                            <input type="radio" id={'x66'} name={'input46'}/>
                            <label> A) is </label>
                        </Box>
                        <Box htmlFor={'x67'} onClick={()=>setTest46(false)}>
                            <input type="radio" id={'x67'} name={'input46'}/>
                            <label> B) am </label>
                        </Box>
                        <Box htmlFor={'x68'} onClick={()=>setTest46(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x68'} name={'input46'}/>
                            <label> C) are </label>
                        </Box>
                        <Box htmlFor={'c68'} onClick={()=>setTest46(false)}>
                            <input type="radio" id={'c68'} name={'input46'}/>
                            <label> D)  * </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 47 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 47. It _ Monday today. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x69'} onClick={()=>setTest47(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x69'} name={'input47'}/>
                            <label> A) is </label>
                        </Box>
                        <Box htmlFor={'x70'} onClick={()=>setTest47(false)}>
                            <input type="radio" id={'x70'} name={'input47'}/>
                            <label> B) am </label>
                        </Box>
                        <Box htmlFor={'x71'} onClick={()=>setTest47(false)}>
                            <input type="radio" id={'x71'} name={'input47'}/>
                            <label> C) are </label>
                        </Box>
                        <Box htmlFor={'c71'} onClick={()=>setTest47(false)}>
                            <input type="radio" id={'c71'} name={'input47'}/>
                            <label> D) * </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 48 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 48. This is the photo _ my family. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x72'} onClick={()=>setTest48(false)}>
                            <input type="radio" id={'x72'} name={'input48'}/>
                            <label> A) in </label>
                        </Box>
                        <Box htmlFor={'x73'} onClick={()=>setTest48(false)}>
                            <input type="radio" id={'x73'} name={'input48'}/>
                            <label> B) at </label>
                        </Box>
                        <Box htmlFor={'x74'} onClick={()=>setTest48(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x74'} name={'input48'}/>
                            <label> C) of </label>
                        </Box>
                        <Box htmlFor={'c74'} onClick={()=>setTest48(false)}>
                            <input type="radio" id={'c74'} name={'input48'}/>
                            <label> D) on </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 49 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 49. It’s good practice _ you. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x75'} onClick={()=>setTest49(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x75'} name={'input49'}/>
                            <label> A) for </label>
                        </Box>
                        <Box htmlFor={'x76'} onClick={()=>setTest49(false)}>
                            <input type="radio" id={'x76'} name={'input49'}/>
                            <label> B) at </label>
                        </Box>
                        <Box htmlFor={'x77'} onClick={()=>setTest49(false)}>
                            <input type="radio" id={'x77'} name={'input49'}/>
                            <label> C) of </label>
                        </Box>
                        <Box htmlFor={'c77'} onClick={()=>setTest49(false)}>
                            <input type="radio" id={'c77'} name={'input49'}/>
                            <label> D) in </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 50 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 50. I’m _ home. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x78'} onClick={()=>setTest50(false)}>
                            <input type="radio" id={'x78'} name={'input50'}/>
                            <label> A) in </label>
                        </Box>
                        <Box htmlFor={'x79'} onClick={()=>setTest50(false)}>
                            <input type="radio" id={'x79'} name={'input50'}/>
                            <label> B) on </label>
                        </Box>
                        <Box htmlFor={'x80'} onClick={()=>setTest50(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x80'} name={'input50'}/>
                            <label> C) at </label>
                        </Box>
                        <Box htmlFor={'c80'} onClick={()=>setTest50(false)}>
                            <input type="radio" id={'c80'} name={'input50'}/>
                            <label> D) from </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 51 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 51. I’m _ La Guardia Community College. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x81'} onClick={()=>setTest51(false)}>
                            <input type="radio" id={'x81'} name={'input51'}/>
                            <label> A) in </label>
                        </Box>
                        <Box htmlFor={'x82'} onClick={()=>setTest51(false)}>
                            <input type="radio" id={'x82'} name={'input51'}/>
                            <label> B) on </label>
                        </Box>
                        <Box htmlFor={'x83'} onClick={()=>setTest51(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x83'} name={'input51'}/>
                            <label> C) at </label>
                        </Box>
                        <Box htmlFor={'c83'} onClick={()=>setTest51(false)}>
                            <input type="radio" id={'c83'} name={'input51'}/>
                            <label> D) of </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 52 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 52. I’m _ New York. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x84'} onClick={()=>setTest52(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x84'} name={'input52'}/>
                            <label> A) in </label>
                        </Box>
                        <Box htmlFor={'x85'} onClick={()=>setTest52(false)}>
                            <input type="radio" id={'x85'} name={'input52'}/>
                            <label> B) for </label>
                        </Box>
                        <Box htmlFor={'x86'} onClick={()=>setTest52(false)}>
                            <input type="radio" id={'x86'} name={'input52'}/>
                            <label> C) at </label>
                        </Box>
                        <Box htmlFor={'c86'} onClick={()=>setTest52(false)}>
                            <input type="radio" id={'c86'} name={'input52'}/>
                            <label> D) of </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 53 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 53. I’m _ a class _ eight other students. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x87'} onClick={()=>setTest53(false)}>
                            <input type="radio" id={'x87'} name={'input53'}/>
                            <label> A) in / for </label>
                        </Box>
                        <Box htmlFor={'x88'} onClick={()=>setTest53(false)}>
                            <input type="radio" id={'x88'} name={'input53'}/>
                            <label> B) at / of </label>
                        </Box>
                        <Box htmlFor={'x89'} onClick={()=>setTest53(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x89'} name={'input53'}/>
                            <label> C) in / with </label>
                        </Box>
                        <Box htmlFor={'c89'} onClick={()=>setTest53(false)}>
                            <input type="radio" id={'c89'} name={'input53'}/>
                            <label> D) at / off </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 54 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 54. I live _ an apartment _ two American boys. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x90'} onClick={()=>setTest54(false)}>
                            <input type="radio" id={'x90'} name={'input54'}/>
                            <label> A) in / of </label>
                        </Box>
                        <Box htmlFor={'x91'} onClick={()=>setTest54(false)}>
                            <input type="radio" id={'x91'} name={'input54'}/>
                            <label> B) at / with </label>
                        </Box>
                        <Box htmlFor={'x92'} onClick={()=>setTest54(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x92'} name={'input54'}/>
                            <label> C) in / with </label>
                        </Box>
                        <Box htmlFor={'c92'} onClick={()=>setTest54(false)}>
                            <input type="radio" id={'c92'} name={'input54'}/>
                            <label> D) of/with </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 55 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 55. Central Park is lovely _ the snow. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x93'} onClick={()=>setTest55(false)}>
                            <input type="radio" id={'x93'} name={'input55'}/>
                            <label> A) at </label>
                        </Box>
                        <Box htmlFor={'xxx'} onClick={()=>setTest55(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'xxx'} name={'input55'}/>
                            <label> B) in </label>
                        </Box>
                        <Box htmlFor={'x95'} onClick={()=>setTest55(false)}>
                            <input type="radio" id={'x95'} name={'input55'}/>
                            <label> C) of </label>
                        </Box>
                        <Box htmlFor={'c95'} onClick={()=>setTest55(false)}>
                            <input type="radio" id={'c95'} name={'input55'}/>
                            <label> D) with </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 56 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 56. “_____ is his job?” “He _ a policeman.” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'x96'} onClick={()=>setTest56(false)}>
                            <input type="radio" id={'x96'} name={'input56'}/>
                            <label> A) Which / is </label>
                        </Box>
                        <Box htmlFor={'x97'} onClick={()=>setTest56(false)}>
                            <input type="radio" id={'x97'} name={'input56'}/>
                            <label> B) What / are </label>
                        </Box>
                        <Box htmlFor={'x98'} onClick={()=>setTest56(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'x98'} name={'input56'}/>
                            <label> C) What / is </label>
                        </Box>
                        <Box htmlFor={'c98'} onClick={()=>setTest56(false)}>
                            <input type="radio" id={'c98'} name={'input56'}/>
                            <label> D) Where / is </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 57 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 57. He _ from Argentina. He is _ Mexico. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z1'} onClick={()=>setTest57(false)}>
                            <input type="radio" id={'z1'} name={'input57'}/>
                            <label> A) is / from </label>
                        </Box>
                        <Box htmlFor={'z2'} onClick={()=>setTest57(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z2'} name={'input57'}/>
                            <label> B) isn’t / from </label>
                        </Box>
                        <Box htmlFor={'z3'} onClick={()=>setTest57(false)}>
                            <input type="radio" id={'z3'} name={'input57'}/>
                            <label> C) isn’t / in </label>
                        </Box>
                        <Box htmlFor={'c3'} onClick={()=>setTest57(false)}>
                            <input type="radio" id={'c3'} name={'input57'}/>
                            <label> D) aren’t / in </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 58 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 58. “_____ _ is a hamburger and chips?” “Three pounds fifty.” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z4'} onClick={()=>setTest58(false)}>
                            <input type="radio" id={'z4'} name={'input58'}/>
                            <label> A) How many </label>
                        </Box>
                        <Box htmlFor={'z5'} onClick={()=>setTest58(false)}>
                            <input type="radio" id={'z5'} name={'input58'}/>
                            <label> B) How often </label>
                        </Box>
                        <Box htmlFor={'z6'} onClick={()=>setTest58(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z6'} name={'input58'}/>
                            <label> C) How much </label>
                        </Box>
                        <Box htmlFor={'c6'} onClick={()=>setTest58(false)}>
                            <input type="radio" id={'c6'} name={'input58'}/>
                            <label> D) How long  </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 59 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 59. Find the opposite word easy - __  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z7'} onClick={()=>setTest59(false)}>
                            <input type="radio" id={'z7'} name={'input59'}/>
                            <label> A) cold </label>
                        </Box>
                        <Box htmlFor={'z8'} onClick={()=>setTest59(false)}>
                            <input type="radio" id={'z8'} name={'input59'}/>
                            <label> B) cheap </label>
                        </Box>
                        <Box htmlFor={'z9'} onClick={()=>setTest59(false)}>
                            <input type="radio" id={'z9'} name={'input59'}/>
                            <label> C) difference </label>
                        </Box>
                        <Box htmlFor={'c9'} onClick={()=>setTest59(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'c9'} name={'input59'}/>
                            <label> D) difficult </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 60 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 60. lovely - __ </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z10'} onClick={()=>setTest60(false)}>
                            <input type="radio" id={'z10'} name={'input60'}/>
                            <label> A) old </label>
                        </Box>
                        <Box htmlFor={'z11'} onClick={()=>setTest60(false)}>
                            <input type="radio" id={'z11'} name={'input60'}/>
                            <label> B) expensive </label>
                        </Box>
                        <Box htmlFor={'z12'} onClick={()=>setTest60(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z12'} name={'input60'}/>
                            <label> C) horrible </label>
                        </Box>
                        <Box htmlFor={'c12'} onClick={()=>setTest60(false)}>
                            <input type="radio" id={'c12'} name={'input60'}/>
                            <label> D) quick </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 61 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 61. fast - __ </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z13'} onClick={()=>setTest61(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z13'} name={'input61'}/>
                            <label> A) slow </label>
                        </Box>
                        <Box htmlFor={'z14'} onClick={()=>setTest61(false)}>
                            <input type="radio" id={'z14'} name={'input61'}/>
                            <label> B) small </label>
                        </Box>
                        <Box htmlFor={'z15'} onClick={()=>setTest61(false)}>
                            <input type="radio" id={'z15'} name={'input61'}/>
                            <label> C) quick </label>
                        </Box>
                        <Box htmlFor={'c15'} onClick={()=>setTest61(false)}>
                            <input type="radio" id={'c15'} name={'input61'}/>
                            <label> D) warm </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 62 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 62. expensive - __ </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z16'} onClick={()=>setTest62(false)}>
                            <input type="radio" id={'z16'} name={'input62'}/>
                            <label> A) big </label>
                        </Box>
                        <Box htmlFor={'z17'} onClick={()=>setTest62(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z17'} name={'input62'}/>
                            <label> B) cheap </label>
                        </Box>
                        <Box htmlFor={'z18'} onClick={()=>setTest62(false)}>
                            <input type="radio" id={'z18'} name={'input62'}/>
                            <label> C) cold </label>
                        </Box>
                        <Box htmlFor={'c18'} onClick={()=>setTest62(false)}>
                            <input type="radio" id={'c18'} name={'input62'}/>
                            <label> D) hot </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 63 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 63. hot - __ </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z19'} onClick={()=>setTest63(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z19'} name={'input63'}/>
                            <label> A) cold </label>
                        </Box>
                        <Box htmlFor={'z20'} onClick={()=>setTest63(false)}>
                            <input type="radio" id={'z20'} name={'input63'}/>
                            <label> B) new </label>
                        </Box>
                        <Box htmlFor={'z21'} onClick={()=>setTest63(false)}>
                            <input type="radio" id={'z21'} name={'input63'}/>
                            <label> C) warm </label>
                        </Box>
                        <Box htmlFor={'c21'} onClick={()=>setTest63(false)}>
                            <input type="radio" id={'c21'} name={'input63'}/>
                            <label> D) small </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 64 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 64. big - __ </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z22'} onClick={()=>setTest64(false)}>
                            <input type="radio" id={'z22'} name={'input64'}/>
                            <label> A) high </label>
                        </Box>
                        <Box htmlFor={'z23'} onClick={()=>setTest64(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z23'} name={'input64'}/>
                            <label> B) small </label>
                        </Box>
                        <Box htmlFor={'z24'} onClick={()=>setTest64(false)}>
                            <input type="radio" id={'z24'} name={'input64'}/>
                            <label> C) tall </label>
                        </Box>
                        <Box htmlFor={'c24'} onClick={()=>setTest64(false)}>
                            <input type="radio" id={'c24'} name={'input64'}/>
                            <label> D) slow </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 65 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 65. young - __ </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z25'} onClick={()=>setTest65(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z25'} name={'input65'}/>
                            <label> A) old </label>
                        </Box>
                        <Box htmlFor={'z26'} onClick={()=>setTest65(false)}>
                            <input type="radio" id={'z26'} name={'input65'}/>
                            <label> B) big </label>
                        </Box>
                        <Box htmlFor={'z27'} onClick={()=>setTest65(false)}>
                            <input type="radio" id={'z27'} name={'input65'}/>
                            <label> C) small </label>
                        </Box>
                        <Box htmlFor={'c27'} onClick={()=>setTest65(false)}>
                            <input type="radio" id={'c27'} name={'input65'}/>
                            <label> D) quick </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 66 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 66. “Are you married?” “No, _ .” </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z28'} onClick={()=>setTest66(false)}>
                            <input type="radio" id={'z28'} name={'input66'}/>
                            <label> A) I am not </label>
                        </Box>
                        <Box htmlFor={'z29'} onClick={()=>setTest66(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z29'} name={'input66'}/>
                            <label> B) I’m not </label>
                        </Box>
                        <Box htmlFor={'z30'} onClick={()=>setTest66(false)}>
                            <input type="radio" id={'z30'} name={'input66'}/>
                            <label> C) I amn’t </label>
                        </Box>
                        <Box htmlFor={'c30'} onClick={()=>setTest66(false)}>
                            <input type="radio" id={'c30'} name={'input66'}/>
                            <label> D) I m not </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 67 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 67. Brazil ____ in Asia. ____ in South America. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z31'} onClick={()=>setTest67(false)}>
                            <input type="radio" id={'z31'} name={'input67'}/>
                            <label> A) is / It isn’t </label>
                        </Box>
                        <Box htmlFor={'z32'} onClick={()=>setTest67(false)}>
                            <input type="radio" id={'z32'} name={'input67'}/>
                            <label> B) is / It’s </label>
                        </Box>
                        <Box htmlFor={'z33'} onClick={()=>setTest67(false)}>
                            <input type="radio" id={'z33'} name={'input67'}/>
                            <label> C) is / Is </label>
                        </Box>
                        <Box htmlFor={'c33'} onClick={()=>setTest67(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'c33'} name={'input67'}/>
                            <label> D) isn’t / It’s </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 68 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 68. Snow is _  </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z34'} onClick={()=>setTest68(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z34'} name={'input68'}/>
                            <label> A) cold </label>
                        </Box>
                        <Box htmlFor={'z35'} onClick={()=>setTest68(false)}>
                            <input type="radio" id={'z35'} name={'input68'}/>
                            <label> B) hot </label>
                        </Box>
                        <Box htmlFor={'z36'} onClick={()=>setTest68(false)}>
                            <input type="radio" id={'z36'} name={'input68'}/>
                            <label> C) small </label>
                        </Box>
                        <Box htmlFor={'c36'} onClick={()=>setTest68(false)}>
                            <input type="radio" id={'c36'} name={'input68'}/>
                            <label> D) cheap </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 69 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 69. We _ in a Russian class. We _ in an English class. </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z37'} onClick={()=>setTest69(false)}>
                            <input type="radio" id={'z37'} name={'input69'}/>
                            <label> A) are / are </label>
                        </Box>
                        <Box htmlFor={'z38'} onClick={()=>setTest69(false)}>
                            <input type="radio" id={'z38'} name={'input69'}/>
                            <label> B) are / not </label>
                        </Box>
                        <Box htmlFor={'z39'} onClick={()=>setTest69(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z39'} name={'input69'}/>
                            <label> C) aren’t / are </label>
                        </Box>
                        <Box htmlFor={'c39'} onClick={()=>setTest69(false)}>
                            <input type="radio" id={'c39'} name={'input69'}/>
                            <label> D) are / am </label>
                        </Box>
                    </Variant>
                </Content> */}
                {/* --------------------------- Question 70 ---------------------------*/}
                {/* <Content>
                    <Question>
                        <h3> 70. Rolls-Royce cars are _ </h3>
                    </Question>
                    <Variant>
                        <Box htmlFor={'z40'} onClick={()=>setTest70(false)}>
                            <input type="radio" id={'z40'} name={'input70'}/>
                            <label> A) cheap </label>
                        </Box>
                        <Box htmlFor={'z41'} onClick={()=>setTest70(false)}>
                            <input type="radio" id={'z41'} name={'input70'}/>
                            <label> B) blue </label>
                        </Box>
                        <Box htmlFor={'z42'} onClick={()=>setTest70(true)} className={`${dis ? 'success' : ''}`}>
                            <input type="radio" id={'z42'} name={'input70'}/>
                            <label> C) expensive </label>
                        </Box>
                        <Box htmlFor={'c42'} onClick={()=>setTest70(false)}>
                            <input type="radio" id={'c42'} name={'input70'}/>
                            <label> D) tall </label>
                        </Box>
                    </Variant>
                </Content>  */}

                {/* --------------------------- Cabinet Finished ---------------------------*/}
                <Finished>
                    <a href="#home">
                        <button onClick={Submit} disabled={disBtn} > Finished </button>
                    </a>
                </Finished>
            </Container>
        </div>
    )
}

export default Cabinet;