#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

uniform float uTime;

vec2 rotate(vec2 uv, float rotation, vec2 mid)
{
    return vec2(
      cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
      cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

void main()
{
    // rotate
    vec2 rotatedUv = rotate(vUv, PI , vec2(0.5));

    float border = step(0.46, max(abs(vUv.x - 0.5) - 0.01, abs(vUv.y - 0.5)));
    border = 1.0 - border;

    float strength = 1.0 - step(0.5, distance(vec2(rotatedUv.x, (rotatedUv.y - 0.5) * 1.0 + 0.05), vec2(0.5)));
    strength *= border;
    
    gl_FragColor = vec4(vec3(strength), 1.0);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    
}
