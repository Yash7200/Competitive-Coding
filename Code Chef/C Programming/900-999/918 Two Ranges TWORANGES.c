#include <stdio.h>
int main()
{
    int t,a,b,c,d;
    scanf("%d",&t);//entering test cases
    for(int i=0;i<t;i++)//entering or asking testing values
    {
        scanf("%d %d %d %d",&a,&b,&c,&d);//entering values of a b c d
        //a<=b as well as c<=d
        //range AB = a to b likewise range CD = c to d
        
        //a==b and c==d
        //a==b and CD be a range
        //c==d and a==b
        //c==d and AB be a range
        
        //AB can be same as CD
        
        //AB can be inside CD
        //CD can be inside AB
        
        //AB's endpoint can be CD's starting point
        //CD's endpoint can be AB's starting point
        
        //AB & CD are totally different
        int cnt=0;
        for(int j=a;j<=b;j++)
        {
            cnt++;
        }
        for(int j=c;j<=d;j++)
        {
            cnt++;
        }
        for(int j=a;j<=b;j++)
        {
            if(j>=c&&j<=d)
            {
                cnt--;
            }
        }
        printf("%d\n",cnt);
    }
    return 0;
}
