$(clickMe).on('click',function(){
    if(popover.style.display === 'none'){
        $(popover).show()
        
    }else if(popover.style.display ==='block'){
       $(popover).hide()
    }
    $(document).one('click',function(){
        $(popover).hide()
    })
   
})
$(wrapper).on('click',false)