  const modal = document.getElementById('myModal');
  		const close = document.getElementsByClassName("close")[0];
  		document.addEventListener('click',function(e){
  			// console.log(e.target);
  			
    		if(e.target && e.target.id == 'calendar_date'){
          		//do something
     			const eventDateOrigin = e.target.title;
     			let eventDate = new Date(eventDateOrigin);
     			// let date_ = `${eventDate.getFullYear()}-${eventDate.getMonth()+1}-${eventDate.getDate()}`;
     			let date_ = calendar_._formateDate(eventDate);
     			// console.log(date_);
  				modal.style.display = 'block';
  				document.querySelector('input[name="modal_date"]').value = date_;
     		}
 		});

  		close.onclick = function() {modal.style.display = 'none';}

      document.querySelector('input[name="siderbar_button"]').addEventListener('change',function(){
        // console.log(this.checked);
        if(this.checked) {
          document.getElementById('sidebar').style.width = '50px';
          document.getElementById('main').style.marginLeft = '50px';  
        }
        else{
          document.getElementById('sidebar').style.width = '150px';
          document.getElementById('main').style.marginLeft = '150px';
        }
      });