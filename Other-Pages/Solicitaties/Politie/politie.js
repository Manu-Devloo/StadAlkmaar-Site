$(function () {
    $("#nav-placeholder").load("/navbar/navbar.html");
});

async function sendContact(ev) {
    ev.preventDefault();

    const senderIngameNaam = document
        .getElementById('IngameNaam').value;
    const senderDiscordNaam = document
        .getElementById('DiscordNaam').value;
    const senderSteamNaam = document
        .getElementById('SteamNaam').value;
    const senderHoelang = document
        .getElementById('Hoelang').value;
    const senderLeeftijd = document
        .getElementById('Leeftijd').value;
    const senderSterkePunten = document
        .getElementById('SterkePunten').value;
    const senderMotivatie = document
        .getElementById('Motivatie').value;
    const senderAanvulling = document
        .getElementById('Aanvulling').value;
    const senderProgress = document
        .getElementById('Progress').value;

    const webhookBody = {
        embeds: [{
            title: 'Sollicitatie ANWB',
            fields: [
                { name: 'IngameNaam', value: senderIngameNaam },
                { name: 'DiscordNaam', value: senderDiscordNaam },
                { name: 'SteamNaam', value: senderSteamNaam },
                { name: 'Hoelang', value: senderHoelang },
                { name: 'Leeftijd', value: senderLeeftijd },
                { name: 'SterkePunten', value: senderSterkePunten },
                { name: 'Motivatie', value: senderMotivatie },
                { name: 'Aanvulling', value: senderAanvulling },
                { name: 'Progress', value: senderProgress },
            ]
        }],
    };

    const webhookUrl = 'https://discord.com/api/webhooks/944224045359046666/Q-b_H_3TQKZk1nWD5ZUpkKxLxaqHGrvYB7TLrmTC_22gmUp-EJK0wLLvKDNWrY9RsSLb';

    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('I have received your message!');
    } else {
        alert('There was an error! Try again later!');
    }
}