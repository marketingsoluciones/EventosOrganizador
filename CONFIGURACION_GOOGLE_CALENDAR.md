# 📅 Configuración de Google Calendar API para Agendamiento de Reuniones

## 🎯 Resumen
Este sistema permite que los usuarios agenden reuniones directamente en tu calendario de Google (eventosorganizador.com@gmail.com) con:
- ✅ Horarios: Lunes a Viernes, 5:00 PM - 8:00 PM
- ✅ Duración: 30 minutos por reunión
- ✅ Envío automático de confirmaciones por email
- ✅ Link de Google Meet incluido automáticamente

---

## 📋 Paso 1: Crear Proyecto en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Inicia sesión con **eventosorganizador.com@gmail.com**
3. Haz clic en **"Seleccionar proyecto"** → **"Nuevo proyecto"**
4. Nombre del proyecto: `EventosOrganizador-Reuniones`
5. Haz clic en **"Crear"**

---

## 🔑 Paso 2: Habilitar Google Calendar API

1. En el menú lateral, ve a **"APIs y servicios"** → **"Biblioteca"**
2. Busca: `Google Calendar API`
3. Haz clic en **"Google Calendar API"**
4. Presiona el botón **"HABILITAR"**

---

## 🤖 Paso 3: Crear Cuenta de Servicio

1. Ve a **"APIs y servicios"** → **"Credenciales"**
2. Haz clic en **"+ CREAR CREDENCIALES"** → **"Cuenta de servicio"**
3. Configuración:
   - **Nombre**: `reunion-scheduler`
   - **ID**: Se genera automáticamente
   - **Descripción**: `Servicio para agendar reuniones automáticamente`
4. Haz clic en **"CREAR Y CONTINUAR"**
5. En "Otorgar acceso", selecciona rol: **Editor**
6. Haz clic en **"CONTINUAR"** → **"LISTO"**

---

## 📝 Paso 4: Generar Clave JSON

1. En la página de **"Credenciales"**, busca tu cuenta de servicio recién creada
2. Haz clic en el email de la cuenta de servicio (ejemplo: `reunion-scheduler@...`)
3. Ve a la pestaña **"CLAVES"**
4. Haz clic en **"AGREGAR CLAVE"** → **"Crear clave nueva"**
5. Selecciona formato **JSON**
6. Haz clic en **"CREAR"**
7. **¡IMPORTANTE!** Se descargará un archivo JSON. Guárdalo en un lugar seguro.

El archivo JSON tendrá esta estructura:
```json
{
  "type": "service_account",
  "project_id": "tu-proyecto-id",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "reunion-scheduler@tu-proyecto.iam.gserviceaccount.com",
  "client_id": "123456789...",
  ...
}
```

---

## 📧 Paso 5: Dar Acceso al Calendario de Gmail

1. Abre **Google Calendar** con la cuenta **eventosorganizador.com@gmail.com**
2. En el menú lateral izquierdo, busca "Mis calendarios"
3. Haz clic en los **3 puntos** junto a tu calendario → **"Configuración y compartición"**
4. Desplázate hasta **"Compartir con usuarios específicos"**
5. Haz clic en **"+ Agregar usuarios"**
6. Pega el email de la cuenta de servicio que copiaste (ejemplo: `reunion-scheduler@...iam.gserviceaccount.com`)
7. Selecciona permisos: **"Hacer cambios en los eventos"**
8. Haz clic en **"Enviar"**

---

## 🔐 Paso 6: Configurar Variables de Entorno

1. En la raíz de tu proyecto, crea o edita el archivo `.env.local`
2. Agrega las siguientes variables usando los datos del archivo JSON:

```env
# Google Calendar API Configuration
GOOGLE_PROJECT_ID=tu-proyecto-id
GOOGLE_PRIVATE_KEY_ID=abc123def456...
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTU_CLAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=reunion-scheduler@tu-proyecto.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=123456789...
GOOGLE_CALENDAR_ID=eventosorganizador.com@gmail.com
GOOGLE_ORGANIZER_EMAIL=eventosorganizador.com@gmail.com
```

**⚠️ IMPORTANTE:**
- La `GOOGLE_PRIVATE_KEY` debe estar entre comillas dobles
- Mantén los `\n` en la clave privada
- **NUNCA** subas este archivo a GitHub
- Asegúrate de que `.env.local` esté en tu `.gitignore`

---

## 🚀 Paso 7: Probar la Configuración

1. Reinicia tu servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Visita: `http://localhost:3000/agendar-reunion`

3. Completa el formulario de prueba:
   - Nombre: Tu nombre
   - Email: Tu email de prueba
   - Teléfono: Tu teléfono
   - Fecha: Selecciona un día laborable
   - Hora: Selecciona entre 17:00 - 20:00

4. Verifica:
   - ✅ El evento aparece en Google Calendar de eventosorganizador.com@gmail.com
   - ✅ Recibes un email de confirmación
   - ✅ El evento tiene un link de Google Meet

---

## 🔧 Solución de Problemas

### Error: "Authentication failed"
- Verifica que el `GOOGLE_PRIVATE_KEY` esté correctamente copiado con todos los `\n`
- Asegúrate de que no hay espacios extra en las variables de entorno

### Error: "Calendar not found"
- Verifica que el `GOOGLE_CALENDAR_ID` sea correcto
- Comprueba que compartiste el calendario con la cuenta de servicio

### Error: "Insufficient permissions"
- Asegúrate de dar permisos de "Hacer cambios en los eventos" a la cuenta de servicio
- Espera 5-10 minutos después de otorgar permisos (propagación de cambios)

### No se envían emails
- Verifica que en la API route está configurado `sendUpdates: 'all'`
- Revisa la bandeja de spam

---

## 🎨 Personalización

### Cambiar Horarios Disponibles

Edita en `pages/agendar-reunion.tsx`:
```typescript
const availableHours = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
];
```

### Cambiar Duración de Reunión

Edita en `pages/api/agendar-reunion.ts`:
```typescript
// Cambiar de 30 minutos a 60 minutos
const endDateTime = new Date(startDateTime.getTime() + 60 * 60000);
```

### Agregar Días del Fin de Semana

Edita en `pages/agendar-reunion.tsx`:
```typescript
// Cambiar de (dayOfWeek >= 1 && dayOfWeek <= 5) a (dayOfWeek >= 1 && dayOfWeek <= 7)
if (dayOfWeek >= 1 && dayOfWeek <= 7) {
  dates.push(new Date(currentDate));
}
```

---

## 🔗 Enlaces Útiles

- [Documentación Google Calendar API](https://developers.google.com/calendar/api/guides/overview)
- [Google Cloud Console](https://console.cloud.google.com/)
- [Google Calendar](https://calendar.google.com/)

---

## 📞 Acceso a la Página

Una vez configurado, los usuarios pueden agendar reuniones en:
```
https://eventosorganizador.com/agendar-reunion
```

O agrega un botón en tu navbar/página principal que dirija a `/agendar-reunion`

---

## ✅ Lista de Verificación Final

- [ ] Proyecto creado en Google Cloud Console
- [ ] Google Calendar API habilitada
- [ ] Cuenta de servicio creada
- [ ] Archivo JSON descargado
- [ ] Calendario compartido con la cuenta de servicio
- [ ] Variables de entorno configuradas en `.env.local`
- [ ] `.env.local` agregado a `.gitignore`
- [ ] Servidor reiniciado
- [ ] Prueba exitosa de agendamiento
- [ ] Email de confirmación recibido
- [ ] Evento visible en Google Calendar

---

¡Listo! Tu sistema de agendamiento de reuniones está funcionando. 🎉
