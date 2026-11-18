import { type EventDefinition, RpgPlayer } from '@rpgjs/server'

// Demo "onboarding quest" — replace texts, questions and graphics with your company's content.
export function Npc(): EventDefinition {
    return {
        onInit() {
            this.setGraphic("female");
        },
        async onAction(player: RpgPlayer) {
            await player.showText('Welcome to the village, traveller! I am Ada, your onboarding guide.')
            await player.showText('Answer my question correctly and you will earn your first badge.')
            const choice = await player.showChoices('What should you do with a suspicious e-mail asking for your password?', [
                { text: 'Reply with my password', value: 'bad' },
                { text: 'Report it to the IT team', value: 'good' },
                { text: 'Forward it to colleagues', value: 'bad' },
            ])
            if (choice?.value === 'good') {
                player.setVariable('BADGE_SECURITY', true)
                await player.showText('Well done! You earned the "Security Hero" badge.')
                player.showNotification('Badge unlocked: Security Hero')
            } else {
                await player.showText('Not quite... Never share your password. Talk to me again to retry!')
            }
        }
    }
}
