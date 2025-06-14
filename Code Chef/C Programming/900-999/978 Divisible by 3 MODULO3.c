//a,b --> non-negative no.

//in 1 operation we can only do

//either
//a = |a-b|
//b = |a-b|

//we need to count min operation to make
// a **or** b divisible by 3
#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int main()
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int a,b;
        scanf("%d %d",&a,&b);
        int cnt=0;
        while(a!=0 || b!=0)
        {
            if(a%3==0 || b%3==0)
            {
                printf("%d\n",cnt);
                break;
            }
            a=abs(a-b);
            cnt++;
        }
    }
    return 0;
}
