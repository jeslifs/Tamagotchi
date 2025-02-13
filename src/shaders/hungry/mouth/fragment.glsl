varying vec2 vUv;

void main()
{
    float strength = step(0.46, max(abs(vUv.x - 0.5) - 0.01, abs(vUv.y - 0.5)));
    strength = 1.0 - strength;

    gl_FragColor = vec4(strength, strength, strength, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    
}