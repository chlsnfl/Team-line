$(function()   //이메일
{
    $('select[name=email3]').change(function()
    {
        $('#email2').val($(this).val());
        $('#email2').attr('readonly','');

        if($('select[name=email3]').val()=='')
        {
            $('#email2').removeAttr('readonly');
        }
    });

});  //jquery

//아이디 확인 완료 시 색상 바뀌게 하기
//일단은 누르면 바뀌는거로 해둠
function changeColor(e)
{
    e.style.backgroundColor='#92CA80';
}


//휴대폰번호 앞 4자리 입력하면 뒤로 바로 넘어가기
const fnum = document.getElementById('firstnum');

fnum.addEventListener('keyup',()=>
{
    if(fnum.value.length>=4)
    {
        document.getElementById('secondnum').focus();
    }
});

//입력 똑바로해라
const uncor = document.getElementsByClassName('uncorrect');
function joinForm()
{
    const fm = document.joinform;
    if(fm.userid.value=='')
    {
        alert('아이디를 입력하세요.');
        fm.idsearch.focus();
        return false;
    }

    if(fm.userpass.value=='')
    {
        uncor[0].style.display='block';
        fm.userpass.focus();
        return false;
    }
    if(fm.userpass2.value=='')
    {
        uncor[1].style.display='block';
        fm.userpass2.focus();
        return false;
    }
    if(fm.userpass.value!=fm.userpass2.value)
    {
        alert('비밀번호가 일치하지 않습니다.');
        fm.userpass.focus();
        return false;
    }
    if(fm.username.value=='')
    {
        uncor[2].style.display='block';
        fm.username.focus();
        return false;
    }
    if(fm.userbirth.value=='')
    {
        uncor[3].style.display='block';
        fm.userbirth.focus();
        return false;
    }
    if(fm.firstnum.value==''||fm.secondnum.value=='')
    {
        uncor[4].style.display='block';
        fm.firstnum.focus();
        return false;
    }
    if(fm.email.value==''||fm.email2.value=='')
    {
        uncor[5].style.display='block';
        fm.email.focus();
        return false;
    }
}

//입력 똑바로해라 2
const inpname = ['userpass','userpass2','username','userbirth','firstnum','email'];

for(let i=0;i<inpname.length;i++)
{
    const inpid = document.getElementById(inpname[i]);
    inpid.addEventListener('keyup',()=>
    {
        if(inpid.value.length==0)uncor[i].style.display='block';
        else uncor[i].style.display='none';
    });
}

const inpsec = document.getElementById('secondnum');
inpsec.addEventListener('keyup',()=>
{
    if(inpsec.value.length==0)uncor[4].style.display='block';
    else uncor[4].style.display='none';
});

const inpem2 = document.getElementById('email2');
inpem2.addEventListener('keyup',()=>
{
    if(inpem2.value.length==0)uncor[5].style.display='block';
    else uncor[5].style.display='none';
});

const selem3 = document.getElementById('email3');
selem3.addEventListener('change',()=>
{
    if(document.getElementById('email2').value='')uncor[5].style.display='block';
    else uncor[5].style.display='none';
});