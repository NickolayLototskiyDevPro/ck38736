// Exam 2. Samoilovich Maxim

const ProjectModule = {
	participants: [],
    pricing: { },
	isBusy: false,
	
	getInstance: function() {
		return this;
	},
	init: function(participants, pricing) {
		if (participants !== undefined) {
			this.participants = participants;
		}
		if (pricing !== undefined) {
			this.pricing = pricing;
		}
	},
	findParticipant: function(functor, callbackFunction) {
		if (this.isBusy) {
			return false;
		} else {
			this.isBusy = true;
			setTimeout(() => {
				if (this.participants.length === 0) {
					this.isBusy = false;
					callbackFunction(null);
					//this.isBusy = false;
				} else {
					for (let i = 0; i < this.participants.length; i++) {
						if (functor(this.participants[i])) {
							this.isBusy = false;
							callbackFunction(this.participants[i]);
							//this.isBusy = false;
							break;
						} else {
							if (i === this.participants.length - 1) {
								this.isBusy = false;
								callbackFunction(null);
								//this.isBusy = false;
							}
						}
					}
				}
			});
		}
	},
	findParticipants: function(functor, callbackFunction) {
		if (this.isBusy) {
			return false;
		} else {
			this.isBusy = true;
			setTimeout(() => {
				const tmp_arr = [];
				for (let i = 0; i < this.participants.length; i++) {
					if (functor(this.participants[i])) {
						tmp_arr.push(this.participants[i]);
					}
				}
				this.isBusy = false;
				callbackFunction(tmp_arr);
				//this.isBusy = false;
			});
		}
	},
	addParticipant: function(participantObject, callbackFunction) {
		if (this.isBusy) {
			return false;
		} else {
			this.isBusy = true;
			setTimeout(() => {
				if (participantObject !== undefined) {
					if (participantObject.hasOwnProperty('seniorityLevel')) {
						this.participants.push(participantObject);
						this.isBusy = false;
						callbackFunction();
						//this.isBusy = false;
					} else {
						this.isBusy = false;
						callbackFunction(true);
						//this.isBusy = false;
					}
				} else {
					this.isBusy = false;
					callbackFunction(true);
					//this.isBusy = false;
				}
			});
		}
	},
	removeParticipant: function(participantObject, callbackFunction) {
		if (this.isBusy) {
			return false;
		} else {
			this.isBusy = true;
			setTimeout(() => {
				if (this.participants.length === 0) {
					this.isBusy = false;
					callbackFunction(null);
					//this.isBusy = false;
				} else {
					for (let i = 0; i < this.participants.length; i++) {
						if (this.participants[i] === participantObject) {
							this.participants.splice(i, 1);
							this.isBusy = false;
							callbackFunction(participantObject);
							//this.isBusy = false;
							break;
						}
						if (i === this.participants.length - 1) {
							this.isBusy = false;
							callbackFunction(null);
							//this.isBusy = false;
						}
					}
				}
			});
		}
	},
	setPricing: function(participantPriceObject, callbackFunction) {
		if (this.isBusy) {
			return false;
		} else {
			this.isBusy = true;
			setTimeout(() => {
				if (participantPriceObject !== undefined) {
					this.pricing = participantPriceObject;
				}
				this.isBusy = false;
				callbackFunction();
			});
		}
	},
	calculateSalary: function(periodInDays) {
		let total = 0;
		for(let i = 0; i < this.participants.length; i++) {
			if (this.pricing.hasOwnProperty(this.participants[i].seniorityLevel)) {
				total += this.pricing[this.participants[i].seniorityLevel] * 8 * periodInDays;
			} else {
				throw new Error;
			}
		}
		return total;
	}

};

module.exports = {
    firstName: 'Maxim',
    secondName: 'Samoilovich',
    task: ProjectModule
}