#include <stdio.h>
#include <math.h>
int main()
{
    int t;
    float ls,b;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%f %f",&b,&ls);
        float side1=sqrt((pow(ls,2))-(pow(b,2)));
        float side2=sqrt((pow(ls,2))+(pow(b,2)));
        printf("%f %f\n",side1,side2);
        
    }
    return 0;
}
