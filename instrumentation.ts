// Uncomment this file to enable instrumentation and observability using OpenTelemetry
// Refer to the docs for installation instructions: https://docs.medusajs.com/learn/debugging-and-testing/instrumentation

import { registerOtel } from '@medusajs/medusa';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';

export function register() {
    throw new Error('OTLP_EXPORTER_URL is not set. Skipping instrumentation.');
    // If using an exporter other than Zipkin, initialize it here.
    // if (!process.env.OTLP_EXPORTER_URL) {
    //     console.error(
    //         'OTLP_EXPORTER_URL is not set. Skipping instrumentation.'
    //     );
    //     return;
    // }

    // const exporter = new OTLPTraceExporter({
    //     url: process.env.OTLP_EXPORTER_URL,
    //     concurrencyLimit: process.env.OTLP_EXPORTER_CONCURRENCY_LIMIT
    //         ? parseInt(process.env.OTLP_EXPORTER_CONCURRENCY_LIMIT)
    //         : 500,
    // });

    // const sdk = registerOtel({
    //     serviceName: 'medusajs',
    //     exporter,
    //     instrument: {
    //         http: true,
    //         workflows: true,
    //         query: true,
    //         db: true,
    //     },
    // });

    // process.on('SIGTERM', () => {
    //     sdk.shutdown()
    //         .then(
    //             () => console.log('OTEL SDK was shut down successfully'),
    //             (err) => console.log('Error shutting down OTEL SDK', err)
    //         )
    //         .finally(() => process.exit(0));
    // });
}
