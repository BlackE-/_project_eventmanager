class Calendar{
	constructor(){
		this.arrayDates = [];
		this.today_ = new Date();
		this.today_timestamp = this.today_.getTime();
		this.today_year = this.today_.getFullYear();
		this.today_month = this.today_.getMonth();
		this.today_day = this.today_.getDate();
		this.month = [];
		this.glideJS;
		this.startDate;
		this.endDate;
		this.index = 1;
		this.startAt = 0;
	}

	_setMonths = () =>{
		this.month.push('Enero');
		this.month.push('Febrero');
		this.month.push('Marzo');
		this.month.push('Abril');
		this.month.push('Mayo');
		this.month.push('Junio');
		this.month.push('Julio');
		this.month.push('Agosto');
		this.month.push('Septiembre');
		this.month.push('Octubre');
		this.month.push('Noviembre');
		this.month.push('Diciembre');
	}

	_setYearInput = (year) =>{
		document.querySelector("input[name='year']").value = year;
	}

	_setMonthInput = (month) =>{
		document.querySelector("input[name='month']").value = this.month[month];
	}

	_leapYear = (year) =>{
		return year % 4 == 0 ? true:false;
	}
	_get3MonthsAfterToday = (date_,date_timestamp) =>{
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
				days_ = this._leapYear(year_) ? 28 : 29;
				days_ += 31; //marzo
				days_ += 30; //abril
			break;
			case 1:
				//february
				remaing_days = this._leapYear(year_) ? 29 - day_ : 28 - day_;
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
				days_ += this._leapYear(year_ + 1 ) ? 28 : 29;
			break;
			case 11:
				//march
				remaing_days = 31 - day_;

				//regresar enero,febrero,marzo
				days_ += 31; //agosto
				days_ += this._leapYear(year_ + 1 ) ? 28 : 29;
				days_ += 31;
			break;
		}

		const newDate_timestamps = date_timestamp + (1000 * 60 * 60 * 24 * days_);

		const newDate_ = new Date( newDate_timestamps );
		return newDate_;
	}

	_get3MonthsBeforeToday = (date_,date_timestamp) =>{
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
				days_ = this._leapYear(year_) ? 28 : 29; //febrero
				days_ += 31; //enero
				days_ += 31; //diciembre

				
			break;
			case 3:
				//april

				//regresar marzo,febrero,enero
				days_ += 31; //marzo
				days_ = this._leapYear(year_) ? 28 : 29; //febrero
				days_ += 31; //enero
			break;
			case 4:
				//may

				//regresar abril,marzo,febrero
				
				days_ += 30; //abril
				days_ += 31; //marzo
				days_ = this._leapYear(year_) ? 28 : 29; //febrero
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
	}

	_checkIfToday = (day_,month_,index) => {
		if(this.today_day === day_ && this.today_month === month_){
			this.startAt = index;
			return true;
		}
		return false;
	}

	_formateDate = (date_) =>{
		let eventDate = new Date(date_);
		return eventDate.getFullYear() + '-' + ('0' + (eventDate.getMonth()+1)).slice(-2) + '-'+ ('0' + eventDate.getDate()).slice(-2) ; 
	}

	_setGlider = () =>{
		this.glideJS = new Glide('.glide', {
			type: 'carousel',
			startAt: this.startAt,
			perView: 7,
			focusAt:'center',
			breakpoints:{
			690: {
			    perView: 1
				}
			}
		}).mount();
	}

	setCarousel = () =>{
		this._setMonths();
		this._setYearInput(this.today_year);
		this._setMonthInput(this.today_month);
		this.startDate = this._get3MonthsBeforeToday(this.today_,this.today_timestamp);
		this.endDate = this._get3MonthsAfterToday(this.today_,this.today_timestamp);


		let dt = this.startDate;
		while (dt <= this.endDate){
			dt.setDate(dt.getDate() + 1);
			let node = document.createElement('LI');                 // Create a <li> node
			node.classList.add('glide__slide');
			let day_ = dt.getDate();
			let month_ = dt.getMonth();
			node.setAttribute('title',dt);
			node.setAttribute('id','calendar_date');

			if(this._checkIfToday(day_,month_,this.index)){
				node.classList.add('today');
			}

			let pnode = document.createElement('p');         // Create a text node
			let textnode = document.createTextNode(day_ + '/' + this.month[month_]);         // Create a text node
			pnode.appendChild(textnode);                              // Append the text to <li>
			node.appendChild(pnode);                              // Append the text to <li>
			document.querySelector('.glide__slides').appendChild(node);
			this.index++;
		}
		this._setGlider();
	}
}

		const calendar_ = new Calendar();
		calendar_.setCarousel();
  		document.querySelector('.btn_today').addEventListener('click',event => {
  			calendar_.glideJS.update({
				startAt: calendar_.startAt
			});
  		});
  		
  		