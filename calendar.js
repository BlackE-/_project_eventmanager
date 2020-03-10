		const arrayDates = [];
		const hoy_ = new Date(Date.now());
		const hoy_day = hoy_.getDate();
		const hoy_month = hoy_.getMonth();
		const month = [];
		let calendar;
		month[0] = 'January';
		month[1] = 'February';
		month[2] = 'March';
		month[3] = 'April';
		month[4] = 'May';
		month[5] = 'June';
		month[6] = 'July';
		month[7] = 'August';
		month[8] = 'September';
		month[9] = 'October';
		month[10] = 'November';
		month[11] = 'December';

		document.querySelector("input[name='month']").value = month[hoy_.getMonth()];
		document.querySelector("input[name='day']").value = hoy_.getDate();
		

		// console.log(hoy_);
		const hoy_timestamp = hoy_.getTime();
		const leapYear = (year) =>{
			return year % 4 == 0 ? true:false;
		};

		const get3MonthsAfterToday = (date_,date_timestamp) =>{
			const day_ = date_.getDate();
			const month_ = date_.getMonth();
			const year_ = date_.getFullYear();
			let remaing_days = 0;
			let days_ = 0;
			switch(month_){
				case 0:
					//january
					remaing_days = 31 - day_;

					//regresar febrero,marzo,abril
					days_ = leapYear(year_) ? 28 : 29;
					days_ += 31; //marzo
					days_ += 30; //abril
				break;
				case 1:
					//february
					remaing_days = leapYear(year_) ? 29 - day_ : 28 - day_;
					//regresar marzo,abril,mayo
					days_ += 31; //marzo
					days_ += 30; //abril
					days_ += 31; //mayo
				break;
				case 2:
					//march
					remaing_days = 31 - day_;

					//regresar abril,mayo,junio
					days_ += 30; //abril
					days_ += 31; //mayo
					days_ += 30; //junio
				break;
				case 3:
					//april
					remaing_days = 30 - day_;

					//regresar mayo,junio,julio
					days_ += 31; //mayo
					days_ += 30; //junio
					days_ += 31; //julio
				break;
				case 4:
					//may
					remaing_days = 31 - day_;

					//regresar junio,julio,agosto
					days_ += 30; //junio
					days_ += 31; //julio
					days_ += 31; //agosto
				break;
				case 5:
					//june
					remaing_days = 30 - day_;

					//regresar julio,agosto,septiembre
					days_ += 31; //julio
					days_ += 31; //agosto
					days_ += 30; //septiembre
				break;
				case 6:
					//july
					remaing_days = 31 - day_;

					//regresar agosto,septiembre,octubre
					days_ += 31; //agosto
					days_ += 30; //septiembre
					days_ += 31; //octubre
				break;
				case 7:
					//august
					remaing_days = 31 - day_;

					//regresar septiembre,octubre,noviembre
					days_ += 31; //septiembre
					days_ += 30; //octubre
					days_ += 31; //noviembre
				break;
				case 8:
					//september
					remaing_days = 30 - day_;

					//regresar octubre,noviembre,diciembre
					days_ += 31; //octubre
					days_ += 30; //noviembre
					days_ += 31; //diciembre
				break;
				case 9:
					//october
					remaing_days = 31 - day_;

					//regresar noviembre,diciembre,enero
					days_ += 30; //noviembre
					days_ += 31; //diciembre
					days_ += 31; //enero
				break;
				case 10:
					//november
					remaing_days = 30 - day_;

					//regresar diciembre,enero,febrero
					days_ += 31; //diciembre
					days_ += 31; //enero
					days_ += leapYear(year_ + 1 ) ? 28 : 29;
				break;
				case 11:
					//march
					remaing_days = 31 - day_;

					//regresar enero,febrero,marzo
					days_ += 31; //agosto
					days_ += leapYear(year_ + 1 ) ? 28 : 29;
					days_ += 31;
				break;
			}

			const newDate_timestamps = date_timestamp + (1000 * 60 * 60 * 24 * days_);

			const newDate_ = new Date( newDate_timestamps );
			return newDate_;
		};

		const get3MonthsBeforeToday = (date_,date_timestamp) =>{
			const day_ = date_.getDate();
			const month_ = date_.getMonth();
			const year_ = date_.getFullYear();
			let days_ = 0;

			switch(month_){
				case 0:
					//january

					//regresar diciembre, noviembre, octubre
					days_ += 31; //octubre
					days_ += 30; //noviembre
					days_ += 31; //diciembre

					
				break;
				case 1:
					//february

					//regresar enero,diciembre,noviembre
					days_ += 31; //enero
					days_ += 31; //diciembre
					days_ += 30; //noviembre
				break;
				case 2:
					//march

					//regresar febrero,enero,diciembre
					days_ = leapYear(year_) ? 28 : 29; //febrero
					days_ += 31; //enero
					days_ += 31; //diciembre

					
				break;
				case 3:
					//april

					//regresar marzo,febrero,enero
					days_ += 31; //marzo
					days_ = leapYear(year_) ? 28 : 29; //febrero
					days_ += 31; //enero
				break;
				case 4:
					//may

					//regresar abril,marzo,febrero
					
					days_ += 30; //abril
					days_ += 31; //marzo
					days_ = leapYear(year_) ? 28 : 29; //febrero
				break;
				case 5:
					//june

					//regresar mayo,abril,marzo
					days_ += 31; //mayo
					days_ += 30; //abril
					days_ += 31; //marzo
				break;
				case 6:
					//july

					//regresar junio,mayo,abril
					days_ += 30; //junio
					days_ += 31; //mayo
					days_ += 30; //abril
				break;
				case 7:
					//august

					//regresar julio,junio,mayo
					days_ += 31; //julio
					days_ += 30; //junio
					days_ += 31; //mayo
				break;
				case 8:
					//september

					//regresar agosto,julio,junio
					days_ += 31; //agosto
					days_ += 31; //julio
					days_ += 30; //junio
				break;
				case 9:
					//october

					//regresar septiembre,agosto,julio
					days_ += 30; //septiembre
					days_ += 31; //agosto
					days_ += 31; //julio
				break;
				case 10:
					//november

					//regresar octubre,septiembre,agosto
					days_ += 31; //octubre
					days_ += 31; //septiembre
					days_ += 31; //agosto
				break;
				case 11:
					//december

					//regresar noviembre,octubre,septiembre
					days_ += 30; //noviembre
					days_ += 31; //octubre
					days_ += 30; //septiembre
				break;
			}

			const newDate_timestamps = date_timestamp + (1000 * 60 * 60 * 24 * -days_);

			const newDate_ = new Date( newDate_timestamps );
			return newDate_;
		};

		const startDate = get3MonthsBeforeToday(hoy_,hoy_timestamp);
		// console.log(startDate);
		const endDate = get3MonthsAfterToday(hoy_,hoy_timestamp);
		// console.log(endDate);

		const setGlider = () =>{
		  		calendar = new Glide('.glide', {
					type: 'carousel',
					startAt: startAt,
					perView: 7,
					focusAt:'center',
					breakpoints:{
					690: {
					    perView: 1
						}
					}
				}).mount();
  		};

		let index = 1;
		let startAt = 0;
		const checkIfToday = (day_,month_,index) => {
			if(hoy_day === day_ && hoy_month === month_){
				startAt = index;
				return true;
			}
			return false;
		};

		const formatDate = (date_) =>{
			let eventDate = new Date(date_);
			return eventDate.getFullYear() + '-' + ('0' + (eventDate.getMonth()+1)).slice(-2) + '-'+ ('0' + eventDate.getDate()).slice(-2) ; 
		};
  		const setCarousel = (start,end) =>{
  			let dt = start;
			while (dt <= end){
				dt.setDate(dt.getDate() + 1);
				let node = document.createElement('LI');                 // Create a <li> node
    			node.classList.add('glide__slide');
    			let day_ = dt.getDate();
    			let month_ = dt.getMonth();
    			node.setAttribute('title',dt);
    			node.setAttribute('id','calendar_date');

    			if(checkIfToday(day_,month_,index)){
    				node.classList.add('today');
    			}

    			let pnode = document.createElement('p');         // Create a text node
    			let textnode = document.createTextNode(day_ + '/' + month[month_]);         // Create a text node
				pnode.appendChild(textnode);                              // Append the text to <li>
				node.appendChild(pnode);                              // Append the text to <li>
				document.querySelector('.glide__slides').appendChild(node);
				index++;
  			}
  			setGlider();
  		};
  		setCarousel(startDate,endDate);
  		document.querySelector('.btn_today').addEventListener('click',event => {
  			calendar.update({
				startAt: startAt
			});
  		});
  		
  		const modal = document.getElementById('myModal');
  		const close = document.getElementsByClassName("close")[0];
  		document.addEventListener('click',function(e){
  			// console.log(e.target);
  			
    		if(e.target && e.target.id == 'calendar_date'){
          		//do something
     			const eventDateOrigin = e.target.title;
     			let eventDate = new Date(eventDateOrigin);
     			// let date_ = `${eventDate.getFullYear()}-${eventDate.getMonth()+1}-${eventDate.getDate()}`;
     			let date_ = formatDate(eventDate);
     			// console.log(date_);
  				modal.style.display = 'block';
  				document.querySelector('input[name="modal_date"]').value = date_;
     		}
 		});

  		close.onclick = function() {modal.style.display = "none";}