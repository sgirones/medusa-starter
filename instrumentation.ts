// Uncomment this file to enable instrumentation and observability using OpenTelemetry
// Refer to the docs for installation instructions: https://docs.medusajs.com/learn/debugging-and-testing/instrumentation

import { registerOtel } from '@medusajs/medusa';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto';

export function register() {
    // If using an exporter other than Zipkin, initialize it here.
    if (!process.env.OTLP_EXPORTER_URL) {
        console.error(
            'OTLP_EXPORTER_URL is not set. Skipping instrumentation.'
        );
        return;
    }

    const exporter = new OTLPTraceExporter({
        url: process.env.OTLP_EXPORTER_URL,
    });

    registerOtel({
        serviceName: 'medusajs',
        // pass exporter
        exporter,
        instrument: {
            http: true,
            workflows: true,
            query: true,
            db: true,
        },
    });
}
