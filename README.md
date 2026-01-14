# 💰 Cotizador de Criptomonedas

Aplicación web desarrollada en React que permite consultar el valor actual de diferentes criptomonedas en tiempo real, utilizando la API de CryptoCompare.

## 🚀 Características

- **Consulta en tiempo real**: Obtén los valores actualizados de las principales criptomonedas
- **Múltiples monedas base**: Compara criptomonedas con diferentes monedas fiat (USD, EUR, etc.)
- **Interfaz moderna**: Diseño atractivo construido con Styled Components
- **React Hooks**: Implementado con useState y useEffect para un manejo eficiente del estado
- **Responsive**: Diseño adaptable a diferentes tamaños de pantalla

## 🛠️ Tecnologías Utilizadas

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Hooks** - useState, useEffect para manejo de estado y efectos secundarios
- **Styled Components** - CSS-in-JS para estilos componentizados
- **Axios** - Cliente HTTP para realizar peticiones a la API
- **Vite** - Herramienta de construcción y desarrollo

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (versión 14 o superior)
- npm o yarn

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/BryanGallo/Cotizador-Criptomonedas.git
```

2. Navega al directorio del proyecto:
```bash
cd Cotizador-Criptomonedas
```

3. Instala las dependencias:
```bash
npm install
```

## 🎯 Uso

1. Inicia el servidor de desarrollo:
```bash
npm run dev
```

2. Abre tu navegador y visita:
```
http://localhost:5173
```

3. Selecciona la criptomoneda y la moneda base que deseas consultar

4. Visualiza el valor actualizado de la criptomoneda seleccionada

## 📡 API Utilizada

Este proyecto utiliza la API pública de [CryptoCompare](https://www.cryptocompare.com/):

```
https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}
```

### Parámetros:
- `fsyms`: Símbolo de la criptomoneda (ej: BTC, ETH, LTC)
- `tsyms`: Símbolo de la moneda base (ej: USD, EUR, MXN)

## 📁 Estructura del Proyecto

```
Cotizador-Criptomonedas/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Características de la Interfaz

- Diseño limpio y moderno
- Indicadores visuales de cambios de precio
- Selección intuitiva de criptomonedas y monedas base
- Información detallada de cada criptomoneda

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
