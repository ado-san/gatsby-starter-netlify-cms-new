/* global monogatari */
// Demo story: "First day at Nova Corp" — an interactive onboarding scenario.
// Replace characters, scenes, texts and choices with your own company content.

monogatari.action ('message').messages ({
	'Tip': {
		title: 'Good practice',
		subtitle: 'Information security',
		body: `<p>Never share your password, even with someone claiming to be from IT.</p>
		<p>Report suspicious e-mails with the <b>Report phishing</b> button.</p>`
	}
});

monogatari.action ('notification').notifications ({
	'Badge': {
		title: 'Badge unlocked',
		body: 'Security Hero',
		icon: ''
	}
});

monogatari.configuration ('credits', {
	'Story': { 'Writing': 'AD Ventures' },
	'Engine': { 'Monogatari': 'Diana Islas Ocampo (MIT License)' }
});

monogatari.characters ({
	'm': { name: 'Maya (HR)', color: '#3273dc' },
	'i': { name: 'Leo (IT)', color: '#00a37a' },
	'x': { name: 'Unknown sender', color: '#e04f5f' }
});

monogatari.script ({
	'Start': [
		'show scene #eaf2ff with fadeIn',
		{
			'Input': {
				'Text': 'Welcome! What is your first name?',
				'Validation': function (input) { return input.trim ().length > 0; },
				'Save': function (input) { this.storage ({ player: { name: input } }); return true; },
				'Revert': function () { this.storage ({ player: { name: '' } }); },
				'Warning': 'Please enter a name.'
			}
		},
		'm Hi {{player.name}}, welcome to Nova Corp! I am Maya from Human Resources.',
		'm Today is your first day. Let me give you a quick tour.',
		{
			'Choice': {
				'Dialog': 'm Where would you like to start?',
				'Values': { 'Text': 'Our values', 'Do': 'jump Values' },
				'IT': { 'Text': 'Get my laptop', 'Do': 'jump IT' }
			}
		}
	],

	'Values': [
		'show scene #fff6e5 with fadeIn',
		'm Our three values are: customer first, transparency and continuous learning.',
		'm You will hear about them a lot — they guide every decision we make.',
		'm Now, let\'s get you set up with IT.',
		'jump IT'
	],

	'IT': [
		'show scene #e9f9f2 with fadeIn',
		'i Hello {{player.name}}! Here is your laptop. Your account is ready.',
		'i One last thing: we run regular security exercises. Stay alert!',
		'show scene #fdecee with fadeIn',
		'x URGENT: your mailbox is full. Send us your password to keep your account active.',
		{
			'Choice': {
				'Dialog': 'What do you do?',
				'Reply': { 'Text': 'Reply with my password', 'Do': 'jump Bad' },
				'Report': { 'Text': 'Report it as phishing', 'Do': 'jump Good' },
				'Ignore': { 'Text': 'Ignore it', 'Do': 'jump Ok' }
			}
		}
	],

	'Bad': [
		'show scene #e9f9f2 with fadeIn',
		'i Oops... that was our phishing test. Never share your password!',
		'show message Tip',
		'i No worries, that\'s what training is for. Let\'s try again.',
		'jump IT'
	],

	'Ok': [
		'show scene #e9f9f2 with fadeIn',
		'i Good reflex not to answer! Next time, please report it so we can protect your colleagues.',
		'jump End'
	],

	'Good': [
		'show scene #e9f9f2 with fadeIn',
		'i Perfect, {{player.name}}! You spotted our phishing test.',
		'show notification Badge',
		'jump End'
	],

	'End': [
		'show scene #eaf2ff with fadeIn',
		'm That\'s it for your first day. Welcome to the team, {{player.name}}!',
		'end'
	]
});
