async function handler(m, { conn }) {
    let numcreador = '51941247696';
    let ownerJid = numcreador + '@s.whatsapp.net';

    let name = await conn.getName(ownerJid) || 'Owner';
    let about = (await conn.fetchStatus(ownerJid).catch(() => {}))?.status || 'Creador de bots de WhatsApp y del ELISABET ⚡😸';
    let empresa = 'GABRIEL- Servicios Y DISEÑADOR';

    let caption = `
⚡ *Información de mi dueño:* ⚡

*👤 Nombre:* ${name}
*📞 Número:* wa.me/${numcreador}
*📝 Descripción:* ${about}
*🏢 Empresa:* ${empresa}
*📧 Email:* (TEXTO
*📸 Instagram:* (TEXTO)
`;

    await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner', 'creator', 'creador', 'dueño'];

export default handler;
