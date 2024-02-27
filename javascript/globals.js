const teachers = {
	"RTTTA": {
		teacherName: "Олександер Мопан",
	}, // 👍
	"TTR": {
		teacherName: "Світлана Анатоліївна",
	}, // :D
	"UCJS": {
		teacherName: "Мислінчук Володимир Олександрович",
	}, // 💤
	// ...
}

const subjects = {
	"IRH": {
		shortSubjName: "ООП",
		fullSubjName: "Об'єктно орієнтоване програмування",
		teacherHash: "RTTTA"
	},
	"TSC": {
		shortSubjName: "Алгоритми",
		fullSubjName: "Алгоритми та структури даних",
		teacherHash: "RTTTA"
	},
	"IDK": {
		shortSubjName: "Веб",
		fullSubjName: "Програмування веб застосувань",
		teacherHash: "RTTTA"
	},
	"IHT": {
		shortSubjName: "Бази Даних",
		fullSubjName: "Бази даних",
		teacherHash: "TTR"
	},
	"IDL": { // like 😋
		shortSubjName: "Математика",
		fullSubjName: "Математика",
		teacherHash: "UCJS"
	},
	// ...
}

const schedule = {
	"monday": {
		name: "Понеділок",
		subjects: ["IRH", "IRH"]
	},
	"tuesday": {
		name: "Вівторок",
		subjects: ["IHT", "IHT", "TSC"]
	},
	"wednesday": {
		name: "Середа",
		subjects: ["IDK", "IDK", "TSC"]
	},
	"thursday": {
		name: "Четвер",
		subjects: ["IDL", "IDL", "IDL"]
	},
	"friday": {
		name: "П'ятниця",
		subjects: ["IRH", "TSC", "TSC"]
	},
	"saturday": {
		name: "Субота"
	},
	"sunday": {
		name: "Неділя"
	},
}

// Якщо створювати багато вікон --ram
function MaybeBack() {
	window.close();
	//window.history.back();
}