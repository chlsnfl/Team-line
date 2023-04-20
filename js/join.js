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
